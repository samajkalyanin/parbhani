// Initial empty array for storing form submissions locally
// In production, this would be replaced with proper backend API calls

export const inquiries = []

export const addInquiry = (inquiry) => {
  const newInquiry = {
    ...inquiry,
    id: Date.now(),
    timestamp: new Date().toISOString(),
    status: 'pending'
  }
  inquiries.push(newInquiry)
  return newInquiry
}
