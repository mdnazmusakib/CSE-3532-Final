
import { useEffect, useState } from 'react'
import { IoCheckmarkCircle } from "react-icons/io5";

export default function Home() {
  const [allData, setAllData] = useState([])

  useEffect(() => {
    fetch('https://openapi.programming-hero.com/api/videos/category/1003')
      .then(response => response.json())
      .then(data => setAllData(data.data || []))
  }, []) // Added dependency array to prevent infinite loop

  // Function to format view count
  const formatViews = (views) => {
    const num = parseInt(views)
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`
    }
    return views
  }

  // Function to format posted date
  const formatDate = (minutes) => {
    const mins = parseInt(minutes)
    const hours = Math.floor(mins / 60)
    const days = Math.floor(hours / 24)
    
    if (days > 0) return `${days} days ago`
    if (hours > 0) return `${hours} hours ago`
    return `${mins} minutes ago`
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {allData.map((data, idx) => (
          <div key={idx} className="flex flex-col gap-4"> 
            {/* Thumbnail Container */}
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <img 
                src={data.thumbnail || "/placeholder.svg"} 
                alt={data.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Container */}
            <div className="flex gap-3">
              {/* Author Profile Picture */}
              <div className="flex-shrink-0">
                <img 
                  src={data.authors[0].profile_picture || "/placeholder.svg"}
                  alt={data.authors[0].profile_name}
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="flex-1">
                {/* Title */}
                <h3 className="font-semibold text-base line-clamp-2 mb-1">
                  {data.title}
                </h3>

                {/* Author Name and Verified Badge */}
                <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
                  <span>{data.authors[0].profile_name}</span>
                  {data.authors[0].verified && (
                    <IoCheckmarkCircle className="w-4 h-4 text-blue-500" />
                  )}
                </div>

                {/* Views and Date */}
                <div className="text-sm text-gray-600">
                  <span>{formatViews(data.others.views)} views</span>
                  <span className="mx-1">•</span>
                  <span>{formatDate(data.others.posted_date)}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

