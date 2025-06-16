
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { MapPin, Calendar, Star, Download, User, Award, Settings } from 'lucide-react';
import Navigation from '@/components/Navigation';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const userProfile = {
    name: 'Arjun Patel',
    location: 'Mumbai, Maharashtra',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    karma: 1250,
    level: 'Advanced Yatri',
    nextLevel: 1500,
    joinDate: 'September 2023',
    completedProjects: 8,
    skills: [
      { name: 'Web Development', level: 'Expert', verified: true },
      { name: 'UI/UX Design', level: 'Intermediate', verified: true },
      { name: 'Photography', level: 'Beginner', verified: false },
      { name: 'Teaching', level: 'Intermediate', verified: true },
    ],
    badges: [
      { name: 'First Yatra', icon: '🎯', earned: true },
      { name: 'Tech Guru', icon: '💻', earned: true },
      { name: 'Community Builder', icon: '🤝', earned: true },
      { name: 'Photographer', icon: '📸', earned: false },
      { name: 'Mentor', icon: '👨‍🏫', earned: true },
      { name: 'Cultural Explorer', icon: '🌍', earned: false },
    ],
    referralCode: 'ARJUN2024',
  };

  const completedProjects = [
    {
      id: 1,
      title: 'E-commerce Platform for Rajasthani Artisans',
      location: 'Jodhpur, Rajasthan',
      duration: '4 weeks',
      karma: 200,
      rating: 4.9,
      certificate: true,
      image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73bb9?w=300&h=200&fit=crop',
      completedDate: 'February 2024',
      hostReview: 'Arjun exceeded our expectations. His technical skills and cultural sensitivity made this project a huge success.',
    },
    {
      id: 2,
      title: 'Digital Marketing for Eco-Resort',
      location: 'Manali, Himachal Pradesh',
      duration: '3 weeks',
      karma: 150,
      rating: 4.8,
      certificate: true,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop',
      completedDate: 'January 2024',
      hostReview: 'Professional approach and creative solutions. Highly recommended!',
    },
  ];

  const testimonials = [
    {
      host: 'Rajesh Kumar',
      project: 'Rural Education Initiative',
      rating: 5,
      comment: 'Arjun brought fresh perspectives to our teaching methods. The students loved his interactive approach.',
      date: 'March 2024',
    },
    {
      host: 'Priya Sharma',
      project: 'Women Empowerment Website',
      rating: 5,
      comment: 'Outstanding technical skills combined with genuine care for our mission. A true professional.',
      date: 'February 2024',
    },
  ];

  const karmaProgress = (userProfile.karma / userProfile.nextLevel) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="relative">
                <img
                  src={userProfile.avatar}
                  alt={userProfile.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-orange-500 to-red-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  {userProfile.level}
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{userProfile.name}</h1>
                <div className="flex items-center justify-center md:justify-start space-x-4 text-gray-600 mb-4">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{userProfile.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>Joined {userProfile.joinDate}</span>
                  </div>
                </div>
                
                {/* Karma Progress */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Karma Points</span>
                    <span className="karma-glow text-2xl font-bold">{userProfile.karma}</span>
                  </div>
                  <Progress value={karmaProgress} className="h-3 mb-2" />
                  <p className="text-sm text-gray-600">
                    {userProfile.nextLevel - userProfile.karma} points to next level
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{userProfile.completedProjects}</div>
                    <div className="text-sm text-gray-600">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">4.9</div>
                    <div className="text-sm text-gray-600">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">28</div>
                    <div className="text-sm text-gray-600">States</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col space-y-3">
                <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700">
                  <Settings className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
                <Button variant="outline">
                  Share Profile
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <div className="flex space-x-1 mb-8 bg-white rounded-lg p-1 shadow-sm">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'projects', label: 'Projects' },
            { id: 'badges', label: 'Badges' },
            { id: 'testimonials', label: 'Testimonials' },
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

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Skills */}
                <Card>
                  <CardHeader>
                    <CardTitle>Skills & Expertise</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {userProfile.skills.map((skill, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="font-medium">{skill.name}</span>
                              {skill.verified && (
                                <Badge variant="secondary" className="text-xs">
                                  ✓ Verified
                                </Badge>
                              )}
                            </div>
                            <span className="text-sm text-gray-600">{skill.level}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="space-y-6">
                {completedProjects.map((project) => (
                  <Card key={project.id} className="overflow-hidden">
                    <div className="md:flex">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full md:w-48 h-48 object-cover"
                      />
                      <CardContent className="flex-1 p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                          <div className="karma-glow text-sm font-bold">
                            +{project.karma} Karma
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4 mb-3 text-sm text-gray-600">
                          <span>{project.location}</span>
                          <span>{project.duration}</span>
                          <span>{project.completedDate}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span className="font-medium">{project.rating}</span>
                          </div>
                          {project.certificate && (
                            <Button size="sm" variant="outline">
                              <Download className="w-4 h-4 mr-1" />
                              Certificate
                            </Button>
                          )}
                        </div>
                        
                        <p className="text-gray-600 text-sm italic">
                          "{project.hostReview}"
                        </p>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            )}

            {activeTab === 'badges' && (
              <Card>
                <CardHeader>
                  <CardTitle>Achievement Badges</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {userProfile.badges.map((badge, index) => (
                      <div
                        key={index}
                        className={`text-center p-4 rounded-lg border-2 transition-all ${
                          badge.earned
                            ? 'border-green-200 bg-green-50'
                            : 'border-gray-200 bg-gray-50 opacity-50'
                        }`}
                      >
                        <div className="text-3xl mb-2">{badge.icon}</div>
                        <div className="font-medium text-sm">{badge.name}</div>
                        {badge.earned && (
                          <Badge className="mt-2 bg-green-600">Earned</Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === 'testimonials' && (
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                          <User className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{testimonial.host}</h4>
                          <p className="text-sm text-gray-600">{testimonial.project}</p>
                        </div>
                        <div className="ml-auto flex items-center space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700 italic">"{testimonial.comment}"</p>
                      <p className="text-sm text-gray-500 mt-2">{testimonial.date}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Referral Code */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Invite Friends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="bg-gray-100 rounded-lg p-4 mb-4">
                    <p className="text-sm text-gray-600 mb-2">Your referral code</p>
                    <p className="text-xl font-bold text-primary">{userProfile.referralCode}</p>
                  </div>
                  <Button variant="outline" className="w-full">
                    Share Code
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Update Availability
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="w-4 h-4 mr-2" />
                  Download Starter Kit
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Award className="w-4 h-4 mr-2" />
                  Verify Skills
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
