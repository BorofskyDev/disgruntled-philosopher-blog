import { useState, useEffect } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db, storage } from '@/libs/firebase/firebase';
import { Timestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useRouter } from 'next/navigation';

export const useCreatePost = () => {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [description, setDescription] = useState('');
  const [mainImage, setMainImage] = useState(null);
  const [tags, setTags] = useState([]);
  const [content, setContent] = useState('');
  const [publishedDate, setPublishedDate] = useState(''); // Storing as string for user input
  const [isDraft, setIsDraft] = useState(true);
  const [seoTitle, setSeoTitle] = useState('');
  const [seoDescription, setSeoDescription] = useState('');
  const [isFeatured, setIsFeatured] = useState(false);

  const router = useRouter();

  // Automatically generate the slug when the title changes
  useEffect(() => {
    const generatedSlug = title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
      .trim()
      .replace(/\s+/g, '-'); // Replace spaces with hyphens
    setSlug(generatedSlug);
  }, [title]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'slug':
        setSlug(value);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'tags':
        setTags(value.split(',').map((tag) => tag.trim())); // Handle tags
        break;
      case 'isDraft':
        setIsDraft(type === 'checkbox' ? checked : value);
        break;
      case 'seoTitle':
        setSeoTitle(value);
        break;
      case 'seoDescription':
        setSeoDescription(value);
        break;
      case 'isFeatured':
        setIsFeatured(checked);
        break;
      case 'publishedDate':
        // Ensure date is properly formatted as YYYY-MM-DD
        setPublishedDate(value || ''); // Ensure empty date doesn't cause issues
        break;
      default:
        break;
    }
  };

  // Handle file input for mainImage
  const handleFileChange = (e) => {
    setMainImage(e.target.files[0]); // Capture the file
  };

  const handleQuillChange = (value) => {
    setContent(value);
  };

  // Upload the image to Firebase Storage
  const uploadImageAndGetUrl = async () => {
    if (!mainImage) return ''; // Return an empty string if no image
    const storageRef = ref(storage, `blogImages/${mainImage.name}`);
    await uploadBytes(storageRef, mainImage);
    return await getDownloadURL(storageRef); // Get the image URL after upload
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const imageUrl = await uploadImageAndGetUrl();

    // Convert publishDate to Firestore Timestamp if it's set
    const publishDateAsTimestamp = publishedDate
      ? Timestamp.fromDate(new Date(publishedDate)) // Ensure the correct format
      : null;

    const formattedDescription = description.replace(/\n/g, '<br/>');

    try {
      // Add the post to Firestore
      await addDoc(collection(db, 'blogPosts'), {
        title,
        slug,
        description: formattedDescription,
        mainImage: imageUrl, // Store the image URL
        tags,
        content,
        publishDate: publishDateAsTimestamp, // Store the Timestamp
        isDraft,
        seoTitle,
        seoDescription,
        isFeatured,
        createdAt: Timestamp.now(), // Add createdAt timestamp
      });

      // Redirect to the admin page after submission
      router.push('/admin');
    } catch (err) {
      console.error('Failed to create post:', err);
    }
  };

  return {
    title,
    slug,
    description,
    mainImage,
    tags,
    content,
    publishedDate,
    isDraft,
    seoTitle,
    seoDescription,
    isFeatured,
    handleInputChange,
    handleFileChange,
    handleQuillChange,
    handleSubmit,
  };
};
