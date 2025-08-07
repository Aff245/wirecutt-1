// File: wirecutter-afffhub/api/activity.js

export default function handler(request, response) {
  // Data aktivitas pengguna (simulasi)
  const activityData = {
    active_users_today: 1578,
    new_reviews_posted: 92,
    products_viewed: 12430,
    last_updated: new Date().toISOString()
  };

  // Mengirim balasan dalam format JSON
  response.status(200).json(activityData);
}
