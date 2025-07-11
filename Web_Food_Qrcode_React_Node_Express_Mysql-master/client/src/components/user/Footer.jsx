import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  Heart,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Main Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-3xl">🍽️</span>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  FoodieHub
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                ร้านอาหารที่มีความหลากหลายของเมนู พร้อมบริการที่ดีที่สุด 
                เพื่อประสบการณ์การรับประทานอาหารที่น่าจดจำ
              </p>
              <div className="flex space-x-4">
                <button className="bg-orange-500 hover:bg-orange-600 p-2 rounded-full transition-colors">
                  <Facebook size={20} />
                </button>
                <button className="bg-orange-500 hover:bg-orange-600 p-2 rounded-full transition-colors">
                  <Instagram size={20} />
                </button>
                <button className="bg-orange-500 hover:bg-orange-600 p-2 rounded-full transition-colors">
                  <Twitter size={20} />
                </button>
                <button className="bg-orange-500 hover:bg-orange-600 p-2 rounded-full transition-colors">
                  <Youtube size={20} />
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-orange-400 border-b-2 border-orange-500 pb-2">
                ลิงก์ด่วน
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors flex items-center group">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    หน้าแรก
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors flex items-center group">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    เมนูอาหาร
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors flex items-center group">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    โปรโมชั่น
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors flex items-center group">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    เกี่ยวกับเรา
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors flex items-center group">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    ติดต่อเรา
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-orange-400 border-b-2 border-orange-500 pb-2">
                ติดต่อเรา
              </h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin size={20} className="text-orange-500 mt-1 flex-shrink-0" />
                  <span>123 ถนนสุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพมหานคร 10110</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone size={20} className="text-orange-500 flex-shrink-0" />
                  <span>02-123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail size={20} className="text-orange-500 flex-shrink-0" />
                  <span>info@foodiehub.com</span>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <Clock size={20} className="text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <p>จันทร์ - ศุกร์: 10:00 - 22:00</p>
                    <p>เสาร์ - อาทิตย์: 09:00 - 23:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-orange-400 border-b-2 border-orange-500 pb-2">
                รับข่าวสาร
              </h4>
              <p className="text-gray-300">
                สมัครรับข่าวสารและโปรโมชั่นพิเศษจากเรา
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="อีเมลของคุณ"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-white placeholder-gray-400"
                />
                <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 px-6 rounded-lg font-medium transition-all transform hover:scale-105">
                  สมัครสมาชิก
                </button>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <input type="checkbox" id="terms" className="accent-orange-500" />
                <label htmlFor="terms">ยอมรับ <a href="#" className="text-orange-400 hover:underline">เงื่อนไขการใช้งาน</a></label>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 my-8"></div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700">
              <div className="text-3xl mb-3">🚚</div>
              <h5 className="font-semibold text-orange-400 mb-2">จัดส่งฟรี</h5>
              <p className="text-gray-300 text-sm">สั่งอาหารครบ 300 บาท</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700">
              <div className="text-3xl mb-3">⭐</div>
              <h5 className="font-semibold text-orange-400 mb-2">คุณภาพเยี่ยม</h5>
              <p className="text-gray-300 text-sm">วัตถุดิบสดใหม่ทุกวัน</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700">
              <div className="text-3xl mb-3">🕐</div>
              <h5 className="font-semibold text-orange-400 mb-2">บริการ 24/7</h5>
              <p className="text-gray-300 text-sm">พร้อมให้บริการตลอดเวลา</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="bg-black border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-gray-400">
                <span>© 2024 FoodieHub. สงวนลิขสิทธิ์</span>
                <Heart size={16} className="text-orange-500" fill="currentColor" />
                <span>Made with love</span>
              </div>
              <div className="flex items-center space-x-6">
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">นโยบายความเป็นส่วนตัว</a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">เงื่อนไขการใช้งาน</a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">คุกกี้</a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white p-3 rounded-full shadow-lg transition-all transform hover:scale-110 z-50"
        >
          <ArrowUp size={20} />
        </button>
      </footer>
    </>
  );
};

export default Footer;