import React from 'react';
import { motion } from 'framer-motion';
import { User, Settings, Award, History, Bell, ChevronRight, LogOut, Heart, HelpCircle, Shield } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const Profile = () => {
  const stats = [
    { label: 'Wishlist', value: '12', icon: Heart },
    { label: 'Points', value: '850', icon: Award },
    { label: 'History', value: '48', icon: History },
  ];

  const sections = [
    {
      title: 'Preferences',
      items: [
        { label: 'Notifications', icon: Bell, extra: 'On' },
        { label: 'Price Alerts', icon: Bell, extra: '3 Active' },
        { label: 'Account Settings', icon: Settings },
      ]
    },
    {
      title: 'Support & Rewards',
      items: [
        { label: 'Rewards Program', icon: Award, color: 'text-orange-500' },
        { label: 'Help Center', icon: HelpCircle },
        { label: 'Privacy Policy', icon: Shield },
      ]
    }
  ];

  return (
    <div className="pb-32 bg-slate-50 min-h-screen">
      {/* Profile Header */}
      <div className="bg-white px-6 pt-12 pb-8 rounded-b-[40px] shadow-sm">
        <div className="flex items-center gap-5 mb-8">
          <div className="relative">
            <div className="w-20 h-20 rounded-3xl bg-primary/10 border-4 border-primary/5 flex items-center justify-center text-primary overflow-hidden">
               <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-green-500 w-5 h-5 rounded-full border-4 border-white"></div>
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900">Alex Johnson</h1>
            <p className="text-slate-500 font-medium">Gold Member since 2024</p>
            <Badge className="mt-2 bg-primary/10 text-primary border-none font-bold">
              Level 12
            </Badge>
          </div>
        </div>

        <div className="flex justify-between gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex-1 bg-slate-50 rounded-2xl p-3 text-center border border-slate-100">
              <div className="flex justify-center mb-1 text-slate-400">
                <stat.icon size={18} />
              </div>
              <div className="text-lg font-bold text-slate-900">{stat.value}</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Menu Sections */}
      <div className="px-6 mt-8 flex flex-col gap-8">
        {sections.map((section) => (
          <div key={section.title} className="flex flex-col gap-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-2">
              {section.title}
            </h3>
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
              {section.items.map((item, idx) => (
                <React.Fragment key={item.label}>
                  <button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl bg-slate-50 ${item.color || 'text-slate-600'}`}>
                        <item.icon size={18} />
                      </div>
                      <span className="font-semibold text-slate-700">{item.label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {item.extra && (
                        <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded-lg">
                          {item.extra}
                        </span>
                      )}
                      <ChevronRight size={16} className="text-slate-300" />
                    </div>
                  </button>
                  {idx < section.items.length - 1 && <Separator className="bg-slate-50 mx-4 w-auto" />}
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}

        <button className="w-full flex items-center justify-center gap-2 p-4 text-red-500 font-bold bg-red-50 rounded-2xl border border-red-100 mt-4">
          <LogOut size={18} />
          Logout
        </button>

        <div className="text-center pb-8">
          <p className="text-slate-300 text-[10px] font-medium">Peek iT Version 1.0.4</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;