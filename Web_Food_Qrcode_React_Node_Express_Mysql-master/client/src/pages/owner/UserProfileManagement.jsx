import React, { useState, useEffect } from "react";
import { Save, Edit2, User, Phone, Shield, Eye, EyeOff, Camera, Check, Clock, UserCheck, Mail } from "lucide-react";

const UserProfileManagement = () => {
    const [userData, setUserData] = useState({
        id: 1,
        first_name: "สมชาย",
        last_name: "ใจดี",
        username: "somchai_jaidee",
        password: "password123",
        phone_number: "0812345678",
        role: "admin",
        profile_image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
        email: "somchai@example.com",
        created_at: "2024-01-15T10:30:00Z",
        updated_at: "2024-01-15T10:30:00Z"
    });
    
    const [formData, setFormData] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const [isDirty, setIsDirty] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const roleOptions = {
        admin: { name: "ผู้ดูแลระบบ", color: "red", bgColor: "bg-red-50 border-red-200" },
    };

    useEffect(() => {
        // Initialize form data from user data
        setFormData({ ...userData });
    }, [userData]);

    useEffect(() => {
        // Check if form data has changed
        const hasChanged = JSON.stringify(formData) !== JSON.stringify(userData);
        setIsDirty(hasChanged);
    }, [formData, userData]);

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSave = async () => {
        if (!formData.first_name?.trim() || !formData.last_name?.trim()) {
            alert("กรุณากรอกชื่อและนามสกุล");
            return;
        }

        if (!formData.username?.trim()) {
            alert("กรุณากรอกชื่อผู้ใช้");
            return;
        }

        if (!formData.password?.trim()) {
            alert("กรุณากรอกรหัสผ่าน");
            return;
        }

        try {
            // Simulate API call
            const updatedUser = {
                ...formData,
                updated_at: new Date().toISOString()
            };
            
            setUserData(updatedUser);
            setIsEditing(false);
            setIsDirty(false);
            alert("✅ บันทึกข้อมูลสำเร็จ");
        } catch (error) {
            console.error("Error saving user:", error);
            alert("❌ เกิดข้อผิดพลาดในการบันทึกข้อมูล");
        }
    };

    const handleCancel = () => {
        setFormData({ ...userData });
        setIsEditing(false);
        setIsDirty(false);
        setShowPassword(false);
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Simulate image upload - in real app, upload to server
            const reader = new FileReader();
            reader.onload = (e) => {
                handleInputChange('profile_image', e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const validatePhoneNumber = (phone) => {
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(phone);
    };

    const getAccountAge = () => {
        const createdDate = new Date(userData.created_at);
        const now = new Date();
        const diffTime = Math.abs(now - createdDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 p-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="bg-white rounded-2xl shadow-xl mb-6 p-6 border-l-4 border-orange-500">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800 mb-2">
                                โปรไฟลผู้ใช้
                            </h1>
                            <p className="text-gray-600">จัดการข้อมูลส่วนตัวและการตั้งค่าบัญชี</p>
                        </div>
                        <div className="flex gap-3">
                            {isEditing ? (
                                <>
                                    <button
                                        onClick={handleCancel}
                                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-semibold"
                                    >
                                        ยกเลิก
                                    </button>
                                    <button
                                        onClick={handleSave}
                                        disabled={!isDirty}
                                        className={`px-6 py-3 rounded-xl font-semibold shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center gap-2 ${
                                            isDirty 
                                                ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white' 
                                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        }`}
                                    >
                                        <Save size={20} />
                                        บันทึก
                                    </button>
                                </>
                            ) : (
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
                                >
                                    <Edit2 size={20} />
                                    แก้ไขข้อมูล
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Profile Header */}
                    <div className="relative bg-gradient-to-r from-orange-400 to-orange-500 p-8">
                        <div className="flex items-center gap-6">
                            <div className="relative">

                                {isEditing && (
                                    <label className="absolute inset-0 cursor-pointer bg-black/50 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                        <Camera size={24} className="text-white" />
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageUpload}
                                            className="hidden"
                                        />
                                    </label>
                                )}
                            </div>
                            <div className="text-white">
                                <h2 className="text-3xl font-bold mb-2">
                                    {userData.first_name} {userData.last_name}
                                </h2>
                                <p className="text-orange-100 text-lg">@{userData.username}</p>
                                <div className="flex items-center gap-2 mt-2">
                                    <Shield size={16} className="text-orange-200" />
                                    <span className="text-orange-100">
                                        ผู้ดูแลระบบ
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* User Info Section */}
                    <div className="p-8">
                        <div className="space-y-8">
                            {/* Personal Information */}
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4">ข้อมูลส่วนตัว</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* First Name */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                                            ชื่อ *
                                        </label>
                                        {isEditing ? (
                                            <input
                                                type="text"
                                                value={formData.first_name || ''}
                                                onChange={(e) => handleInputChange('first_name', e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                                                placeholder="ชื่อ"
                                                required
                                            />
                                        ) : (
                                            <div className="bg-orange-50 p-4 rounded-xl border border-orange-200">
                                                <p className="text-orange-600 font-semibold">
                                                    {userData.first_name || 'ยังไม่ระบุชื่อ'}
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Last Name */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                                            นามสกุล *
                                        </label>
                                        {isEditing ? (
                                            <input
                                                type="text"
                                                value={formData.last_name || ''}
                                                onChange={(e) => handleInputChange('last_name', e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                                                placeholder="นามสกุล"
                                                required
                                            />
                                        ) : (
                                            <div className="bg-orange-50 p-4 rounded-xl border border-orange-200">
                                                <p className="text-orange-600 font-semibold">
                                                    {userData.last_name || 'ยังไม่ระบุนามสกุล'}
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Phone Number */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                                            เบอร์โทรศัพท์
                                        </label>
                                        {isEditing ? (
                                            <input
                                                type="tel"
                                                value={formData.phone_number || ''}
                                                onChange={(e) => handleInputChange('phone_number', e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                                                placeholder="0812345678"
                                                maxLength="10"
                                            />
                                        ) : (
                                            <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                                                <div className="flex items-center gap-3">
                                                    <Phone size={20} className="text-green-600" />
                                                    <p className="text-green-600 font-semibold">
                                                        {userData.phone_number || 'ยังไม่ระบุเบอร์โทร'}
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                                            อีเมล
                                        </label>
                                        {isEditing ? (
                                            <input
                                                type="email"
                                                value={formData.email || ''}
                                                onChange={(e) => handleInputChange('email', e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                                                placeholder="example@email.com"
                                            />
                                        ) : (
                                            <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
                                                <div className="flex items-center gap-3">
                                                    <Mail size={20} className="text-purple-600" />
                                                    <p className="text-purple-600 font-semibold">
                                                        {userData.email || 'ยังไม่ระบุอีเมล'}
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Account Information */}
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4">ข้อมูลบัญชี</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Username */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                                            ชื่อผู้ใช้ *
                                        </label>
                                        {isEditing ? (
                                            <input
                                                type="text"
                                                value={formData.username || ''}
                                                onChange={(e) => handleInputChange('username', e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                                                placeholder="ชื่อผู้ใช้"
                                                required
                                            />
                                        ) : (
                                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                                <div className="flex items-center gap-3">
                                                    <User size={20} className="text-gray-600" />
                                                    <p className="text-gray-700 font-semibold">
                                                        {userData.username || 'ยังไม่ระบุชื่อผู้ใช้'}
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Password */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                                            รหัสผ่าน *
                                        </label>
                                        {isEditing ? (
                                            <div className="relative">
                                                <input
                                                    type={showPassword ? "text" : "password"}
                                                    value={formData.password || ''}
                                                    onChange={(e) => handleInputChange('password', e.target.value)}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all pr-12"
                                                    placeholder="รหัสผ่าน"
                                                    required
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                                >
                                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                                </button>
                                            </div>
                                        ) : (
                                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                                <p className="text-gray-700 font-semibold">
                                                    ••••••••••
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Role */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                                            บทบาท
                                        </label>
                                        {isEditing ? (
                                            <select
                                                value={formData.role || ''}
                                                onChange={(e) => handleInputChange('role', e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                                            >
                                                {Object.entries(roleOptions).map(([key, value]) => (
                                                    <option key={key} value={key}>
                                                        {value.name}
                                                    </option>
                                                ))}
                                            </select>
                                        ) : (
                                            <div className={`p-4 rounded-xl border ${roleOptions[userData.role]?.bgColor || 'bg-gray-50 border-gray-200'}`}>
                                                <div className="flex items-center gap-3">
                                                    <Shield size={20} className={`text-${roleOptions[userData.role]?.color || 'gray'}-600`} />
                                                    <p className={`font-semibold text-${roleOptions[userData.role]?.color || 'gray'}-600`}>
                                                        {roleOptions[userData.role]?.name || userData.role}
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* User ID */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                                            ID ผู้ใช้
                                        </label>
                                        <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                            <p className="text-gray-700 font-semibold">
                                                #{userData.id}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Profile Image URL (only in edit mode) */}
                           

                            {/* Timestamps */}
                            <div className="pt-6 border-t border-gray-200">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-500">
                                    <div>
                                        <p className="font-semibold">วันที่สร้างบัญชี:</p>
                                        <p>{new Date(userData.created_at).toLocaleString('th-TH')}</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold">อัปเดตล่าสุด:</p>
                                        <p>{new Date(userData.updated_at).toLocaleString('th-TH')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Statistics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
                    <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-orange-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-semibold text-gray-600">อายุบัญชี</p>
                                <p className="text-lg font-bold text-orange-600">
                                    {getAccountAge()} วัน
                                </p>
                            </div>
                            <div className="bg-orange-100 p-3 rounded-xl">
                                <Clock size={24} className="text-orange-600" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-green-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-semibold text-gray-600">ข้อมูลครบถ้วน</p>
                                <p className="text-lg font-bold text-green-600">
                                    {[userData.first_name, userData.last_name, userData.username, userData.phone_number, userData.email, userData.profile_image]
                                        .filter(Boolean).length}/6
                                </p>
                            </div>
                            <div className="bg-green-100 p-3 rounded-xl">
                                <Check size={24} className="text-green-600" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-purple-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-semibold text-gray-600">สถานะบัญชี</p>
                                <p className="text-lg font-bold text-purple-600">
                                    ใช้งานได้
                                </p>
                            </div>
                            <div className="bg-purple-100 p-3 rounded-xl">
                                <UserCheck size={24} className="text-purple-600" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-orange-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-semibold text-gray-600">มีรูปโปรไฟล</p>
                                <p className="text-lg font-bold text-orange-600">
                                    {userData.profile_image ? 'มี' : 'ไม่มี'}
                                </p>
                            </div>
                            <div className="bg-orange-100 p-3 rounded-xl">
                                <User size={24} className="text-orange-600" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfileManagement;