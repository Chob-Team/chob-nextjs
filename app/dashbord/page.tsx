"use client"
import { getItem } from '../../localStore';
import { get } from 'http';
import React from 'react';


const DashboardPage: React.FC = () => {
    const isDarkTheme = true; // Replace with your theme switch logic
    const employee = getItem('employee');

    console.log(employee);
    return (
        <div className="bg-white dark:bg-gray-800 h-full pt-4 pl-4">
            <h1 className="text-4xl font-bold">Dashboard</h1>
            {/* Rest of your dashboard content */}

        </div>
    );
};

export default DashboardPage;
