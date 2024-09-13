
export const normalizeUrl = (url) => {
  if (url && !/^https?:\/\//i.test(url)) {
    return 'https://' + url // Automatically prepend 'https://' if not present
  }
  return url
}


export const resetForm = (setters) => {
  setters.forEach((setter) => setter(''))
}


export const sendMessage = async (db, collectionName, messageData) => {
  try {
    await addDoc(collection(db, collectionName), {
      ...messageData,
      createdAt: new Date(),
    })
    return { success: true }
  } catch (error) {
    console.error('Error sending message:', error)
    return { success: false, error: 'Error sending message. Please try again.' }
  }
}
