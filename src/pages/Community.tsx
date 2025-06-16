
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MessageCircle, Heart, Share2, Trophy, Users, Star } from 'lucide-react';
import Navigation from '@/components/Navigation';

const Community = () => {
  const [activeTab, setActiveTab] = useState('forum');

  const forumCategories = [
    {
      name: 'First-time Tips',
      posts: 234,
      icon: '💡',
      color: 'bg-blue-100 text-blue-800',
      description: 'Essential advice for new yatris',
    },
    {
      name: 'Packing Guides',
      posts: 156,
      icon: '🎒',
      color: 'bg-green-100 text-green-800',
      description: 'What to pack for different regions',
    },
    {
      name: 'Best Yatras',
      posts: 189,
      icon: '⭐',
      color: 'bg-yellow-100 text-yellow-800',
      description: 'Recommended experiences',
    },
    {
      name: 'Safety & Health',
      posts: 98,
      icon: '🛡️',
      color: 'bg-red-100 text-red-800',
      description: 'Staying safe during your journey',
    },
  ];

  const recentPosts = [
    {
      id: 1,
      title: 'My first Yatra in Himachal - Complete Guide',
      author: 'Priya Sharma',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b332c3c7?w=40&h=40&fit=crop&crop=face',
      karma: 850,
      category: 'First-time Tips',
      replies: 23,
      likes: 45,
      timeAgo: '2 hours ago',
      preview: 'Just completed my first volunteer experience in Manali. Here are my top 10 tips for anyone planning their first Yatra...',
    },
    {
      id: 2,
      title: 'Essential items for monsoon volunteering in Kerala',
      author: 'Arjun Patel',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      karma: 920,
      category: 'Packing Guides',
      replies: 12,
      likes: 28,
      timeAgo: '5 hours ago',
      preview: 'After 3 monsoon seasons volunteering in Kerala, here\'s my ultimate packing checklist...',
    },
    {
      id: 3,
      title: 'Cultural sensitivity tips for rural volunteering',
      author: 'Sneha Das',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
      karma: 760,
      category: 'Best Yatras',
      replies: 18,
      likes: 52,
      timeAgo: '1 day ago',
      preview: 'Respecting local customs and traditions is crucial for meaningful volunteering. Here are some insights...',
    },
  ];

  const topContributors = [
    {
      name: 'Rajesh Kumar',
      karma: 2450,
      contributions: 89,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      badge: 'Community Leader',
    },
    {
      name: 'Ananya Singh',
      karma: 1890,
      contributions: 67,
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face',
      badge: 'Top Mentor',
    },
    {
      name: 'Vikram Joshi',
      karma: 1620,
      contributions: 54,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
      badge: 'Story Teller',
    },
  ];

  const featuredStories = [
    {
      id: 1,
      title: 'From City to Village: My Digital Detox Journey',
      author: 'Meera Gupta',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop',
      likes: 156,
      views: 1240,
      readTime: '5 min read',
      preview: 'How three weeks in a Himalayan village changed my perspective on technology and life...',
      location: 'Kasauli, Himachal Pradesh',
    },
    {
      id: 2,
      title: 'Teaching Kids in Rural Rajasthan: A Transformative Experience',
      author: 'Rohit Malhotra',
      image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73bb9?w=400&h=250&fit=crop',
      likes: 203,
      views: 1890,
      readTime: '7 min read',
      preview: 'The joy of seeing children learn technology for the first time is indescribable...',
      location: 'Jaisalmer, Rajasthan',
    },
    {
      id: 3,
      title: 'Sustainable Tourism: Creating a Better Future',
      author: 'Kavya Reddy',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&h=250&fit=crop',
      likes: 89,
      views: 756,
      readTime: '4 min read',
      preview: 'How volunteering in eco-tourism projects is shaping sustainable travel in India...',
      location: 'Munnar, Kerala',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">YatraConnect Community</h1>
          <p className="text-xl text-gray-600">Connect, share, and learn from fellow travelers</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center space-x-1 mb-8 bg-white rounded-lg p-1 shadow-sm max-w-md mx-auto">
          {[
            { id: 'forum', label: 'Forum' },
            { id: 'stories', label: 'Stories' },
            { id: 'leaderboard', label: 'Leaderboard' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-4 py-2 rounded-md font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-primary text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Forum Tab */}
        {activeTab === 'forum' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle>Forum Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {forumCategories.map((category, index) => (
                      <div
                        key={index}
                        className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                      >
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-2xl">{category.icon}</span>
                          <div>
                            <h3 className="font-semibold text-gray-900">{category.name}</h3>
                            <Badge className={category.color}>{category.posts} posts</Badge>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">{category.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Posts */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Discussions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentPosts.map((post) => (
                    <div key={post.id} className="border-b border-gray-100 pb-4 last:border-b-0">
                      <div className="flex items-start space-x-4">
                        <Avatar>
                          <AvatarImage src={post.avatar} />
                          <AvatarFallback>{post.author[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 hover:text-primary cursor-pointer">
                            {post.title}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">{post.preview}</p>
                          <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                            <span className="font-medium text-gray-700">{post.author}</span>
                            <Badge variant="secondary">{post.category}</Badge>
                            <div className="flex items-center space-x-1">
                              <MessageCircle className="w-4 h-4" />
                              <span>{post.replies}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Heart className="w-4 h-4" />
                              <span>{post.likes}</span>
                            </div>
                            <span>{post.timeAgo}</span>
                          </div>
                        </div>
                        <div className="karma-glow text-sm font-bold">
                          {post.karma}
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Community Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Total Members</span>
                      <span className="font-bold text-primary">2,847</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Active Discussions</span>
                      <span className="font-bold text-primary">156</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Posts This Week</span>
                      <span className="font-bold text-primary">89</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Top Contributors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topContributors.map((contributor, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="text-lg font-bold text-primary">#{index + 1}</div>
                        <Avatar>
                          <AvatarImage src={contributor.avatar} />
                          <AvatarFallback>{contributor.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">{contributor.name}</div>
                          <div className="text-sm text-gray-600">{contributor.contributions} contributions</div>
                        </div>
                        <div className="karma-glow text-sm font-bold">
                          {contributor.karma}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Stories Tab */}
        {activeTab === 'stories' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredStories.map((story) => (
              <Card key={story.id} className="card-hover overflow-hidden">
                <div className="relative">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 rounded-full px-2 py-1 text-xs font-medium">
                    {story.readTime}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{story.title}</h3>
                  <p className="text-gray-600 mb-4">{story.preview}</p>
                  
                  <div className="flex items-center space-x-2 mb-4 text-sm text-gray-500">
                    <span className="font-medium text-gray-700">{story.author}</span>
                    <span>•</span>
                    <span>{story.location}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{story.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{story.views}</span>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Leaderboard Tab */}
        {activeTab === 'leaderboard' && (
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="w-6 h-6 text-yellow-500" />
                  <span>Community Leaderboard</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topContributors.map((contributor, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-4 p-4 rounded-lg ${
                        index === 0 ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200' :
                        index === 1 ? 'bg-gradient-to-r from-gray-50 to-slate-50 border-2 border-gray-200' :
                        index === 2 ? 'bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200' :
                        'bg-gray-50'
                      }`}
                    >
                      <div className={`text-2xl font-bold ${
                        index === 0 ? 'text-yellow-600' :
                        index === 1 ? 'text-gray-600' :
                        index === 2 ? 'text-orange-600' :
                        'text-gray-400'
                      }`}>
                        #{index + 1}
                      </div>
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={contributor.avatar} />
                        <AvatarFallback>{contributor.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{contributor.name}</div>
                        <Badge variant="secondary">{contributor.badge}</Badge>
                      </div>
                      <div className="text-right">
                        <div className="karma-glow text-xl font-bold">{contributor.karma}</div>
                        <div className="text-sm text-gray-600">{contributor.contributions} contributions</div>
                      </div>
                      {index === 0 && (
                        <div className="text-2xl">🏆</div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Community;
