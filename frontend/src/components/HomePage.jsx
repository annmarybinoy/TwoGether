import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const HomePage = () => {
  const themeRed = '#E63946'; // Cute Red
  
  return (
    <div className="min-h-screen bg-red-50 flex flex-col items-center justify-center p-4" 
         style={{ fontFamily: 'Poppins, sans-serif' }}>

      {/* Heart Logo Image */}
      <img src="/love.png" alt="Heart Logo" className="w-16 h-16 mb-3" />

      <div className="text-center mb-8">
        <h1 className="text-6xl mb-2" 
            style={{ 
              color: themeRed, 
              fontFamily: 'Pacifico, cursive',
              textShadow: '2px 2px 6px rgba(230,57,70,0.3)'
            }}>
          TwoGether
        </h1>
        <p className="text-gray-700 mt-2 text-lg tracking-wide" 
           style={{ fontFamily: 'Quicksand, sans-serif' }}>
          Growing stronger together, forever ❤️
        </p>
      </div>

      <Card className="w-full max-w-xs sm:max-w-sm md:max-w-md shadow-lg border-red-200">
        <CardHeader>
          <CardTitle className="text-3xl text-center font-semibold text-red-600">
            Create Account
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm">Email</label>
              <Input
                id="email"
                type="email"
                placeholder="Email address"
                className="w-full focus:ring-2 focus:ring-red-400 text-lg rounded-xl"
              />
            </div>
            
            <div className="relative">
              <label htmlFor="birthday" className="block text-gray-700 text-sm">Birthday</label>
              <Input
                id="birthday"
                type="date"
                className="w-full focus:ring-2 focus:ring-red-400 text-lg rounded-xl"
              />
              <Calendar className="absolute right-3 top-10 h-5 w-5 pointer-events-none text-red-500" />
            </div>

            <Button 
              className="w-full hover:opacity-90 transition-opacity text-lg font-semibold rounded-xl"
              style={{ backgroundColor: themeRed, color: 'white' }}
            >
              Join TwoGether ✨
            </Button>

            <div className="text-center text-base">
              <a 
                href="/login" 
                className="text-gray-600 hover:text-red-500 transition-colors"
              >
                Already have an account?Log in
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default HomePage;
