import Image from "next/image"
import Link from "next/link"
import {
  Facebook,
  Twitter,
  Instagram,
  Send,
  MessageCircle,
  Youtube,
  Mail,
  Github,
  Linkedin,
  Globe,
  ShoppingCart,
  Code,
  Heart,
  FileText,
} from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-md mx-auto bg-white rounded-3xl shadow-sm p-8">
        {/* Profile Photo */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-100">
            <img
              src="/logo-base.png"
              alt="John Snow profile photo"
              width={86}
              height={86}
              className="w-full h-full p-3 object-contain"
            />
          </div>
        </div>

        {/* Name and Bio */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-3">الخدمات الالكترونية</h1>
        </div>

     
        {/* Links List */}
        <div className="space-y-4" dir="rtl">
          <Link href="#" className="flex items-center gap-4 p-4 rounded-xl one transition-colors group">
            <div className="w-8 h-8 flex items-center justify-center">
              <Globe size={20} className="text-gray-600 group-hover:text-gray-900" />
            </div>
            <span className="text-gray- 900 font-medium"> مخالفات السير </span>
          </Link>

        
          <div className="two">
          <Link href="#"   className="flex items-center gap-4 p-4 rounded-xl   transition-colors group one  ">
            <div className="w-8 h-8 flex items-center justify-center ">
              <Globe size={20} className="text-gray-600 group-hover:text-gray-900 group-hover:scale-1 " />
            </div>
            <span className="text-gray-900 font-medium">دفع فواتير الكهرباء</span>
          </Link>
          </div>

          <Link href="#" className="flex items-center gap-4 p-4 rounded-xl one transition-colors group">
            <div className="w-8 h-8 flex items-center justify-center">
              <Globe size={20} className="text-gray-600 group-hover:text-gray-900" />
            </div>
            <span className="text-gray-900 font-medium">شحن رصيد جميع الشبكات</span>
          </Link>

          <Link href="#" className="flex items-center gap-4 p-4 rounded-xl one transition-colors group">
            <div className="w-8 h-8 flex items-center justify-center">
              <Globe size={20} className="text-gray-600 group-hover:text-gray-900" />
            </div>
            <span className="text-gray-900 font-medium">دفع فواتير الماء</span>
          </Link>

         
        </div>
      </div>
    </div>
  )
}
