// Didaar Exhibition Prototype - Multi-Role & Super Admin Web Panel Engine (10+ Dummy Entries in All Modules)

const AppData = {
  portalMode: 'mobile', // 'mobile' | 'web_admin'
  currentRole: 'customer', // 'customer' | 'stall_owner' | 'staff' | 'admin_staff'
  isLoggedIn: false,

  // ================= 1. CUSTOMER PROFILE DATA =================
  customerUser: {
    name: "Priya Sharma",
    phone: "+91 98765 43210",
    email: "priya.sharma@example.com",
    city: "Ahmedabad",
    memberSince: "Oct 2025",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
  },

  // 10 Customer Invoices / Purchase History
  customerInvoices: [
    { invoiceNo: "DID-2026-8891", date: "28 Mar 2026, 02:45 PM", stallName: "Zaveri Royal Jewels", stallNumber: "Stall A-12", stallOwner: "Vikramaditya Zaveri", venue: "Riverfront Convention Centre, Ahmedabad", items: [{ name: "Regal Kundan & Emerald Choker Set", qty: 1, rate: 18500, amount: 18500 }], subtotal: 18500, taxGst: 555, totalAmount: 19055, paymentMethod: "UPI / PhonePe", paymentStatus: "PAID", billedBy: "Nilesh Patel" },
    { invoiceNo: "DID-2026-8742", date: "28 Mar 2026, 04:15 PM", stallName: "Gulabo Jaipur Couture", stallNumber: "Stall B-08", stallOwner: "Meenakshi Rathore", venue: "Riverfront Convention Centre, Ahmedabad", items: [{ name: "Gulab-Bagh Chanderi Anarkali Set", qty: 1, rate: 6200, amount: 6200 }], subtotal: 6200, taxGst: 310, totalAmount: 6510, paymentMethod: "Credit Card (POS)", paymentStatus: "PAID", billedBy: "Kavita Soni" },
    { invoiceNo: "DID-2026-8610", date: "28 Mar 2026, 05:30 PM", stallName: "Mochi Heritage Juttis", stallNumber: "Stall C-15", stallOwner: "Harpreet Singh", venue: "Riverfront Convention Centre, Ahmedabad", items: [{ name: "Zardozi Blossom Bridal Jutti", qty: 1, rate: 2400, amount: 2400 }], subtotal: 2400, taxGst: 120, totalAmount: 2520, paymentMethod: "Cash", paymentStatus: "PAID", billedBy: "Harpreet Singh" },
    { invoiceNo: "DID-2026-8504", date: "28 Mar 2026, 06:10 PM", stallName: "Virasat Weaves & Loom", stallNumber: "Stall D-04", stallOwner: "Anandita Mukherjee", venue: "Riverfront Convention Centre, Ahmedabad", items: [{ name: "Banarasi Katan Silk Dupatta", qty: 1, rate: 4500, amount: 4500 }], subtotal: 4500, taxGst: 225, totalAmount: 4725, paymentMethod: "UPI / GPay", paymentStatus: "PAID", billedBy: "Anandita M." },
    { invoiceNo: "DID-2026-8419", date: "29 Mar 2026, 11:20 AM", stallName: "Aura Living Home Decor", stallNumber: "Stall E-02", stallOwner: "Sunil Narang", venue: "Riverfront Convention Centre, Ahmedabad", items: [{ name: "Handcrafted Brass Urli Diya", qty: 2, rate: 1800, amount: 3600 }], subtotal: 3600, taxGst: 180, totalAmount: 3780, paymentMethod: "UPI / Paytm", paymentStatus: "PAID", billedBy: "Sunil N." },
    { invoiceNo: "DID-2026-8311", date: "29 Mar 2026, 12:45 PM", stallName: "Shringaar Organic Beauty", stallNumber: "Stall F-09", stallOwner: "Tanvi Sheth", venue: "Riverfront Convention Centre, Ahmedabad", items: [{ name: "Kumkumadi Bridal Glow Facial Kit", qty: 1, rate: 1950, amount: 1950 }], subtotal: 1950, taxGst: 97, totalAmount: 2047, paymentMethod: "Cash", paymentStatus: "PAID", billedBy: "Tanvi S." },
    { invoiceNo: "DID-2026-8205", date: "29 Mar 2026, 02:15 PM", stallName: "Rajputana Polki Studio", stallNumber: "Stall A-06", stallOwner: "Devendra Rathore", venue: "Riverfront Convention Centre, Ahmedabad", items: [{ name: "Antique Jadau Mathapatti", qty: 1, rate: 8900, amount: 8900 }], subtotal: 8900, taxGst: 267, totalAmount: 9167, paymentMethod: "Credit Card", paymentStatus: "PAID", billedBy: "Devendra R." },
    { invoiceNo: "DID-2026-8109", date: "29 Mar 2026, 03:30 PM", stallName: "Banaras Heritage Silks", stallNumber: "Stall B-14", stallOwner: "Mohanlal Mishra", venue: "Riverfront Convention Centre, Ahmedabad", items: [{ name: "Pure Kanjivaram Bridal Saree", qty: 1, rate: 14500, amount: 14500 }], subtotal: 14500, taxGst: 725, totalAmount: 15225, paymentMethod: "UPI / PhonePe", paymentStatus: "PAID", billedBy: "Mohanlal M." },
    { invoiceNo: "DID-2026-8012", date: "29 Mar 2026, 04:50 PM", stallName: "Kashmir Loom Treasures", stallNumber: "Stall D-11", stallOwner: "Farooq Dar", venue: "Riverfront Convention Centre, Ahmedabad", items: [{ name: "Authentic Cashmere Pashmina Stole", qty: 1, rate: 11000, amount: 11000 }], subtotal: 11000, taxGst: 550, totalAmount: 11550, paymentMethod: "Credit Card (POS)", paymentStatus: "PAID", billedBy: "Farooq D." },
    { invoiceNo: "DID-2026-7915", date: "29 Mar 2026, 05:40 PM", stallName: "Jharokha Terracotta Art", stallNumber: "Stall E-08", stallOwner: "Gopal Kumhar", venue: "Riverfront Convention Centre, Ahmedabad", items: [{ name: "Terracotta Handpainted Vase Set", qty: 1, rate: 2200, amount: 2200 }], subtotal: 2200, taxGst: 110, totalAmount: 2310, paymentMethod: "Cash", paymentStatus: "PAID", billedBy: "Gopal K." }
  ],

  // 10 Customer Notifications
  customerNotifications: [
    { id: "cn-1", title: "Exhibition Entry Pass Ready 🎉", message: "Your VIP entry pass for Didaar Grand Festive Expo has been sent to your WhatsApp number (+91 98765 43210).", time: "10 mins ago", type: "pass" },
    { id: "cn-2", title: "Invoice Generated (₹19,055)", message: "Thank you for shopping at Zaveri Royal Jewels (Stall A-12). Your e-invoice #DID-2026-8891 is ready to download.", time: "1 hour ago", type: "invoice" },
    { id: "cn-3", title: "Invoice Generated (₹6,510)", message: "Thank you for shopping at Gulabo Jaipur (Stall B-08). E-invoice #DID-2026-8742 is available.", time: "2 hours ago", type: "invoice" },
    { id: "cn-4", title: "Special Flash Discount Alert 🛍️", message: "Mochi Heritage Juttis (Stall C-15) is offering flat 20% off on all bridal footwear till 6:00 PM today!", time: "3 hours ago", type: "offer" },
    { id: "cn-5", title: "Live Couture Ramp Showcase", message: "Bridal Couture Walk starts at Main Hall A at 5:30 PM. VIP pass holders have reserved front-row seating.", time: "5 hours ago", type: "system" },
    { id: "cn-6", title: "Invoice Generated (₹4,725)", message: "Your purchase invoice #DID-2026-8504 from Virasat Weaves has been delivered to your app.", time: "Yesterday", type: "invoice" },
    { id: "cn-7", title: "Upcoming Exhibition Announcement", message: "Royal Heritage Bridal Fair is coming to Mumbai next month! Early bird VIP registration is now live.", time: "2 days ago", type: "system" },
    { id: "cn-8", title: "Digital Pass Verified at Gate 1", message: "Welcome to Didaar Grand Expo! Your entry badge has been verified at entrance terminal.", time: "2 days ago", type: "pass" },
    { id: "cn-9", title: "Stall Recommendations for You", message: "Based on your jewellery preferences, explore Rajputana Polki (Stall A-06) and Zaveri Royal (Stall A-12).", time: "3 days ago", type: "offer" },
    { id: "cn-10", title: "Welcome to Didaar Exhibitions", message: "Discover India's most celebrated couturiers, generational jewelers, and master craftsmen.", time: "5 days ago", type: "system" }
  ],

  // ================= 2. STALL OWNER DATA (10 Staff, 10 Products, 10 Bills) =================
  stallOwnerUser: {
    name: "Vikramaditya Zaveri",
    businessName: "Zaveri Royal Heritage Jewels LLP",
    brandName: "Zaveri Royal Jewels",
    phone: "+91 98250 11223",
    email: "vikram@zaverijewels.com",
    city: "Ahmedabad",
    gstin: "24AAACZ1234F1Z8",
    category: "Jewellery & Silver",
    stallNumber: "Stall A-12",
    hall: "Hall A (Main Boulevard)",
    logo: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=200&q=80",
    cover: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
    bio: "Generational master artisans specializing in authentic Jadau, Polki, Kundan & 92.5 Sterling Silver bridal jewellery.",
    
    application: {
      appId: "APP-2026-DX-089",
      submittedDate: "12 Feb 2026",
      category: "Fine Jewellery & Jadau Pavilion",
      stallSize: "6m x 3m (Corner Premium)",
      status: "Approved",
      assignedStall: "Stall A-12",
      hall: "Hall A - Ground Floor",
      assignedExhibition: "Didaar Grand Festive Expo 2026",
      adminRemarks: "Application approved. Corner stall allocated with dedicated high-security showcase power fixtures."
    },

    payment: {
      totalFee: 80000,
      advancePaid: 50000,
      advanceDate: "15 Feb 2026",
      remainingFee: 30000,
      status: "Partially Paid",
      exitStatus: "Approved by Admin",
      exitPassId: "EXIT-DX-2026-A12",
      exitQr: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=EXIT-DX-2026-A12-CLEARED-ZAVERI"
    },

    // 10 Staff Members
    staff: [
      { id: "st-1", name: "Nilesh Patel", role: "Billing & Cashier Specialist", phone: "+91 98790 12345", email: "nilesh.p@zaverijewels.com", assignedExhibition: "Didaar Grand Festive Expo 2026", status: "Active", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80", credentialsSent: true, todayBills: 5, todaySales: 38400 },
      { id: "st-2", name: "Kavita Soni", role: "Senior Sales Associate", phone: "+91 98240 56789", email: "kavita.s@zaverijewels.com", assignedExhibition: "Didaar Grand Festive Expo 2026", status: "Active", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80", credentialsSent: true, todayBills: 4, todaySales: 26500 },
      { id: "st-3", name: "Ramesh Shah", role: "Inventory & Stock Associate", phone: "+91 97123 45678", email: "ramesh.s@zaverijewels.com", assignedExhibition: "Royal Heritage Bridal Fair - Mumbai", status: "Assigned", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80", credentialsSent: true, todayBills: 0, todaySales: 0 },
      { id: "st-4", name: "Amit Trivedi", role: "Showcase Security Specialist", phone: "+91 98981 22334", email: "amit.t@zaverijewels.com", assignedExhibition: "Didaar Grand Festive Expo 2026", status: "Active", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80", credentialsSent: true, todayBills: 0, todaySales: 0 },
      { id: "st-5", name: "Meera Joshi", role: "Bridal Jewellery Consultant", phone: "+91 98255 66778", email: "meera.j@zaverijewels.com", assignedExhibition: "Didaar Grand Festive Expo 2026", status: "Active", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80", credentialsSent: true, todayBills: 3, todaySales: 21200 },
      { id: "st-6", name: "Sneha Kapadia", role: "Client Relations & VIP Host", phone: "+91 98980 77665", email: "sneha.k@zaverijewels.com", assignedExhibition: "Didaar Grand Festive Expo 2026", status: "Active", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80", credentialsSent: true, todayBills: 2, todaySales: 15400 },
      { id: "st-7", name: "Harish Vyas", role: "POS Systems Operator", phone: "+91 97230 11229", email: "harish.v@zaverijewels.com", assignedExhibition: "Didaar Art & Handloom Utsav - Surat", status: "Assigned", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80", credentialsSent: true, todayBills: 0, todaySales: 0 },
      { id: "st-8", name: "Pooja Dave", role: "Silverware & Gifting Consultant", phone: "+91 98799 44332", email: "pooja.d@zaverijewels.com", assignedExhibition: "Royal Heritage Bridal Fair - Mumbai", status: "Onboarded", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80", credentialsSent: true, todayBills: 0, todaySales: 0 },
      { id: "st-9", name: "Suresh Rathore", role: "Logistics & Valuables Escort", phone: "+91 98244 88771", email: "suresh.r@zaverijewels.com", assignedExhibition: "Didaar Grand Festive Expo 2026", status: "Active", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80", credentialsSent: true, todayBills: 0, todaySales: 0 },
      { id: "st-10", name: "Divya Panchal", role: "Pret Jewellery Sales Lead", phone: "+91 97112 33445", email: "divya.p@zaverijewels.com", assignedExhibition: "Didaar Grand Festive Expo 2026", status: "Active", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80", credentialsSent: true, todayBills: 2, todaySales: 14800 }
    ],

    // 10 Master Inventory Products for Stall Owner
    inventory: [
      { id: "p-101", name: "Regal Kundan & Emerald Choker Set", category: "Jewellery", price: 18500, masterStock: 20, allocatedExpo: 10, assignedStaff: { "Nilesh Patel": 5, "Kavita Soni": 5 }, sold: 4, available: 6, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=500&q=80", description: "22K gold plated brass choker set adorned with semi-precious emerald drops." },
      { id: "p-102", name: "Temple Motif Antique Silver Kada", category: "Jewellery", price: 7800, masterStock: 25, allocatedExpo: 12, assignedStaff: { "Nilesh Patel": 6, "Kavita Soni": 6 }, sold: 5, available: 7, image: "https://images.unsplash.com/photo-1611591475102-460a7f580001?auto=format&fit=crop&w=500&q=80", description: "92.5 Hallmark sterling silver antique finished openable kada." },
      { id: "p-103", name: "Polki Diamond Pearl Drop Jhumkas", category: "Jewellery", price: 12400, masterStock: 18, allocatedExpo: 8, assignedStaff: { "Nilesh Patel": 4, "Kavita Soni": 4 }, sold: 3, available: 5, image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=500&q=80", description: "Handcrafted polki diamond finish jhumkas with freshwater pearls." },
      { id: "p-104", name: "Rajputana Royal Hasli Necklace", category: "Jewellery", price: 24000, masterStock: 10, allocatedExpo: 6, assignedStaff: { "Nilesh Patel": 3, "Kavita Soni": 3 }, sold: 2, available: 4, image: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=500&q=80", description: "Heavy bridal hasli necklace with meenakari reverse work." },
      { id: "p-105", name: "Victorian Emerald & Diamond Cocktail Ring", category: "Jewellery", price: 5600, masterStock: 30, allocatedExpo: 15, assignedStaff: { "Nilesh Patel": 8, "Kavita Soni": 7 }, sold: 6, available: 9, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=500&q=80", description: "Statement cocktail ring with micro-pave cubic zirconia and Russian emerald." },
      { id: "p-106", name: "Meenakari Peacock Kada Pair", category: "Jewellery", price: 9200, masterStock: 16, allocatedExpo: 8, assignedStaff: { "Nilesh Patel": 4, "Kavita Soni": 4 }, sold: 3, available: 5, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=500&q=80", description: "Hand-enameled Jaipur meenakari silver bangles pair." },
      { id: "p-107", name: "Kundan Mathapatti with Pearl Strings", category: "Jewellery", price: 8500, masterStock: 12, allocatedExpo: 6, assignedStaff: { "Nilesh Patel": 3, "Kavita Soni": 3 }, sold: 2, available: 4, image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=500&q=80", description: "Traditional bridal forehead headpiece with pearl layering." },
      { id: "p-108", name: "92.5 Sterling Silver Pooja Thali Set", category: "Jewellery", price: 16800, masterStock: 14, allocatedExpo: 6, assignedStaff: { "Nilesh Patel": 3, "Kavita Soni": 3 }, sold: 2, available: 4, image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=500&q=80", description: "Pure silver festive thali set comprising diya, agarbatti stand, and bell." },
      { id: "p-109", name: "Ruby Cluster Chandbali Earrings", category: "Jewellery", price: 6800, masterStock: 22, allocatedExpo: 10, assignedStaff: { "Nilesh Patel": 5, "Kavita Soni": 5 }, sold: 4, available: 6, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=500&q=80", description: "Moissanite and lab-created pigeon blood ruby moon-shaped earrings." },
      { id: "p-110", name: "Solitaire Tennis Bracelet (92.5 Silver)", category: "Jewellery", price: 4900, masterStock: 28, allocatedExpo: 14, assignedStaff: { "Nilesh Patel": 7, "Kavita Soni": 7 }, sold: 6, available: 8, image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=500&q=80", description: "Classic 4-prong diamond tennis bracelet in sterling silver." }
    ],

    // 10 Bills generated by staff at this stall
    bills: [
      { billNo: "DID-2026-8891", date: "28 Mar 2026, 02:45 PM", customerName: "Priya Sharma", customerPhone: "+91 98765 43210", item: "Regal Kundan & Emerald Choker Set", qty: 1, total: 19055, billedBy: "Nilesh Patel", paymentMode: "UPI / PhonePe" },
      { billNo: "DID-2026-8840", date: "28 Mar 2026, 01:15 PM", customerName: "Ananya Mehta", customerPhone: "+91 98210 99881", item: "Temple Motif Antique Silver Kada", qty: 1, total: 8190, billedBy: "Kavita Soni", paymentMode: "Credit Card" },
      { billNo: "DID-2026-8795", date: "28 Mar 2026, 11:30 AM", customerName: "Ritu Dave", customerPhone: "+91 97110 55443", item: "Polki Diamond Pearl Drop Jhumkas", qty: 1, total: 13020, billedBy: "Nilesh Patel", paymentMode: "Cash" },
      { billNo: "DID-2026-8680", date: "28 Mar 2026, 04:20 PM", customerName: "Bhavin Shah", customerPhone: "+91 98250 44332", item: "Rajputana Royal Hasli Necklace", qty: 1, total: 25200, billedBy: "Meera Joshi", paymentMode: "UPI / GPay" },
      { billNo: "DID-2026-8572", date: "28 Mar 2026, 05:45 PM", customerName: "Kavita Singhal", customerPhone: "+91 98980 11229", item: "Victorian Emerald Cocktail Ring", qty: 2, total: 11760, billedBy: "Kavita Soni", paymentMode: "Credit Card" },
      { billNo: "DID-2026-8450", date: "29 Mar 2026, 11:10 AM", customerName: "Deepak Patel", customerPhone: "+91 98790 33221", item: "Meenakari Peacock Kada Pair", qty: 1, total: 9660, billedBy: "Nilesh Patel", paymentMode: "UPI / Paytm" },
      { billNo: "DID-2026-8342", date: "29 Mar 2026, 12:30 PM", customerName: "Alpa Trivedi", customerPhone: "+91 97244 55667", item: "Kundan Mathapatti with Pearls", qty: 1, total: 8925, billedBy: "Divya Panchal", paymentMode: "Cash" },
      { billNo: "DID-2026-8219", date: "29 Mar 2026, 01:50 PM", customerName: "Sunita Agarwal", customerPhone: "+91 98110 77889", item: "92.5 Silver Pooja Thali Set", qty: 1, total: 17640, billedBy: "Nilesh Patel", paymentMode: "Credit Card" },
      { billNo: "DID-2026-8104", date: "29 Mar 2026, 03:15 PM", customerName: "Neha Chokshi", customerPhone: "+91 94260 88991", item: "Ruby Cluster Chandbali Earrings", qty: 2, total: 14280, billedBy: "Kavita Soni", paymentMode: "UPI / PhonePe" },
      { billNo: "DID-2026-7990", date: "29 Mar 2026, 04:30 PM", customerName: "Jinal Vora", customerPhone: "+91 98255 11990", item: "Solitaire Tennis Bracelet", qty: 1, total: 5145, billedBy: "Sneha Kapadia", paymentMode: "Cash" }
    ],

    // 10 Stall Owner Notifications
    notifications: [
      { id: "sn-1", title: "Stall Application Approved! 🎉", message: "Admin approved application for Didaar Grand Expo. Assigned Stall A-12 in Hall A.", time: "Just now", type: "approval" },
      { id: "sn-2", title: "New Bill Generated by Nilesh Patel", message: "Invoice #DID-2026-8891 for ₹19,055 was created against Priya Sharma.", time: "25 mins ago", type: "sales" },
      { id: "sn-3", title: "New Bill Generated by Kavita Soni", message: "Invoice #DID-2026-8840 for ₹8,190 was created against Ananya Mehta.", time: "1 hour ago", type: "sales" },
      { id: "sn-4", title: "Staff Onboarding Completed", message: "Kavita Soni activated staff login for Didaar Grand Expo.", time: "2 hours ago", type: "staff" },
      { id: "sn-5", title: "Stock Low Alert: Emerald Choker", message: "Only 2 units remaining in-hand for Regal Kundan Choker Set.", time: "3 hours ago", type: "stock" },
      { id: "sn-6", title: "Stall Exit Clearance Ready 🚪", message: "Admin verified your stall payment status. Exit Pass QR is active for Gate 3.", time: "5 hours ago", type: "payment" },
      { id: "sn-7", title: "Advance Payment Verified", message: "Finance accounts confirmed receipt of ₹50,000 advance rent.", time: "1 day ago", type: "payment" },
      { id: "sn-8", title: "VIP Visitor Footfall Peak", message: "Over 800 visitors visited Hall A today between 2:00 PM and 5:00 PM.", time: "1 day ago", type: "system" },
      { id: "sn-9", title: "Festival Marketing Post Exported", message: "Your custom Diwali Post was exported in PNG format for WhatsApp sharing.", time: "2 days ago", type: "system" },
      { id: "sn-10", title: "Welcome to Didaar Expo Portal", message: "Setup your digital catalogue and allocate stock to assigned staff members.", time: "3 days ago", type: "system" }
    ]
  },

  // ================= 3. STALL OWNER STAFF MEMBER DATA (10 In-Hand Products, 10 Sales) =================
  staffUser: {
    name: "Nilesh Patel",
    role: "Billing & Cashier Specialist",
    phone: "+91 98790 12345",
    email: "nilesh.p@zaverijewels.com",
    stallName: "Zaveri Royal Jewels",
    stallNumber: "Stall A-12",
    hall: "Hall A (Main Boulevard)",
    ownerName: "Vikramaditya Zaveri",
    ownerPhone: "+91 98250 11223",
    assignedExhibition: "Didaar Grand Festive Expo 2026",
    city: "Ahmedabad",
    venue: "Grand Hall A, Riverfront Convention Centre",
    dates: "28 Mar - 30 Mar 2026",
    timings: "10:30 AM - 08:30 PM",
    expiryDate: "30 Mar 2026, 08:30 PM",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    
    // 10 Products allocated in-hand to Nilesh Patel
    allocatedStock: [
      { id: "p-101", name: "Regal Kundan & Emerald Choker Set", category: "Jewellery", price: 18500, allocatedQty: 5, soldQty: 3, inHandQty: 2, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=500&q=80" },
      { id: "p-102", name: "Temple Motif Antique Silver Kada", category: "Jewellery", price: 7800, allocatedQty: 6, soldQty: 3, inHandQty: 3, image: "https://images.unsplash.com/photo-1611591475102-460a7f580001?auto=format&fit=crop&w=500&q=80" },
      { id: "p-103", name: "Polki Diamond Pearl Drop Jhumkas", category: "Jewellery", price: 12400, allocatedQty: 4, soldQty: 2, inHandQty: 2, image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=500&q=80" },
      { id: "p-104", name: "Rajputana Royal Hasli Necklace", category: "Jewellery", price: 24000, allocatedQty: 3, soldQty: 1, inHandQty: 2, image: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=500&q=80" },
      { id: "p-105", name: "Victorian Emerald Cocktail Ring", category: "Jewellery", price: 5600, allocatedQty: 8, soldQty: 4, inHandQty: 4, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=500&q=80" },
      { id: "p-106", name: "Meenakari Peacock Kada Pair", category: "Jewellery", price: 9200, allocatedQty: 4, soldQty: 2, inHandQty: 2, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=500&q=80" },
      { id: "p-107", name: "Kundan Mathapatti with Pearls", category: "Jewellery", price: 8500, allocatedQty: 3, soldQty: 1, inHandQty: 2, image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=500&q=80" },
      { id: "p-108", name: "92.5 Silver Pooja Thali Set", category: "Jewellery", price: 16800, allocatedQty: 3, soldQty: 1, inHandQty: 2, image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=500&q=80" },
      { id: "p-109", name: "Ruby Cluster Chandbali Earrings", category: "Jewellery", price: 6800, allocatedQty: 5, soldQty: 2, inHandQty: 3, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=500&q=80" },
      { id: "p-110", name: "Solitaire Tennis Bracelet", category: "Jewellery", price: 4900, allocatedQty: 7, soldQty: 3, inHandQty: 4, image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=500&q=80" }
    ],

    // 10 Sales History Bills created by Nilesh Patel
    salesHistory: [
      { billNo: "DID-2026-8891", date: "28 Mar 2026, 02:45 PM", customerName: "Priya Sharma", customerPhone: "+91 98765 43210", items: [{ name: "Regal Kundan & Emerald Choker Set", qty: 1, rate: 18500, amount: 18500 }], totalAmount: 19055, paymentMode: "UPI / PhonePe" },
      { billNo: "DID-2026-8795", date: "28 Mar 2026, 11:30 AM", customerName: "Ritu Dave", customerPhone: "+91 97110 55443", items: [{ name: "Polki Diamond Pearl Drop Jhumkas", qty: 1, rate: 12400, amount: 12400 }], totalAmount: 12772, paymentMode: "Cash" },
      { billNo: "DID-2026-8650", date: "28 Mar 2026, 03:40 PM", customerName: "Bhavin Shah", customerPhone: "+91 98250 44332", items: [{ name: "Temple Motif Antique Silver Kada", qty: 1, rate: 7800, amount: 7800 }], totalAmount: 8034, paymentMode: "UPI / GPay" },
      { billNo: "DID-2026-8510", date: "28 Mar 2026, 05:15 PM", customerName: "Kavita Singhal", customerPhone: "+91 98980 11229", items: [{ name: "Victorian Emerald Cocktail Ring", qty: 2, rate: 5600, amount: 11200 }], totalAmount: 11536, paymentMode: "Credit Card" },
      { billNo: "DID-2026-8450", date: "29 Mar 2026, 11:10 AM", customerName: "Deepak Patel", customerPhone: "+91 98790 33221", items: [{ name: "Meenakari Peacock Kada Pair", qty: 1, rate: 9200, amount: 9200 }], totalAmount: 9476, paymentMode: "UPI / Paytm" },
      { billNo: "DID-2026-8312", date: "29 Mar 2026, 12:20 PM", customerName: "Alpa Trivedi", customerPhone: "+91 97244 55667", items: [{ name: "Kundan Mathapatti with Pearls", qty: 1, rate: 8500, amount: 8500 }], totalAmount: 8755, paymentMode: "Cash" },
      { billNo: "DID-2026-8219", date: "29 Mar 2026, 01:50 PM", customerName: "Sunita Agarwal", customerPhone: "+91 98110 77889", items: [{ name: "92.5 Silver Pooja Thali Set", qty: 1, rate: 16800, amount: 16800 }], totalAmount: 17304, paymentMode: "Credit Card" },
      { billNo: "DID-2026-8155", date: "29 Mar 2026, 02:40 PM", customerName: "Neha Chokshi", customerPhone: "+91 94260 88991", items: [{ name: "Ruby Cluster Chandbali Earrings", qty: 1, rate: 6800, amount: 6800 }], totalAmount: 7004, paymentMode: "UPI / PhonePe" },
      { billNo: "DID-2026-8022", date: "29 Mar 2026, 03:55 PM", customerName: "Jinal Vora", customerPhone: "+91 98255 11990", items: [{ name: "Solitaire Tennis Bracelet", qty: 1, rate: 4900, amount: 4900 }], totalAmount: 5047, paymentMode: "Cash" },
      { billNo: "DID-2026-7910", date: "29 Mar 2026, 04:45 PM", customerName: "Mehul Parekh", customerPhone: "+91 98799 66554", items: [{ name: "Rajputana Royal Hasli Necklace", qty: 1, rate: 24000, amount: 24000 }], totalAmount: 24720, paymentMode: "UPI / PhonePe" }
    ],

    // 10 Staff Notifications
    notifications: [
      { id: "stn-1", title: "Exhibition Assigned: Stall A-12", message: "You are assigned to Didaar Grand Festive Expo by Vikramaditya Zaveri.", time: "Today, 09:00 AM", type: "assignment" },
      { id: "stn-2", title: "Stock Allocation Updated", message: "48 units across 10 jewellery items allocated to your physical in-hand inventory.", time: "Today, 09:30 AM", type: "stock" },
      { id: "stn-3", title: "Bill #DID-2026-8891 Dispatched", message: "Invoice sent to customer Priya Sharma (+91 98765 43210) via WhatsApp.", time: "2:45 PM", type: "invoice" },
      { id: "stn-4", title: "Shift Sales Target Achieved 🎯", message: "Congratulations! You crossed ₹1,00,000 in today's on-ground sales.", time: "3:30 PM", type: "sales" },
      { id: "stn-5", title: "Stock Low: Emerald Choker Set", message: "Only 2 units remaining in your in-hand box. Request replenishment if required.", time: "4:00 PM", type: "stock" },
      { id: "stn-6", title: "Payment Mode QR Updated", message: "UPI dynamic QR payment soundbox verified at cashier station.", time: "5:00 PM", type: "system" },
      { id: "stn-7", title: "VIP Client Arriving", message: "Client Sunita Agarwal scheduled to visit Stall A-12 at 1:45 PM.", time: "Yesterday", type: "assignment" },
      { id: "stn-8", title: "Bill #DID-2026-8795 Created", message: "Cash transaction of ₹12,772 recorded successfully.", time: "Yesterday", type: "invoice" },
      { id: "stn-9", title: "Shift Announcement", message: "Day 2 closing bell at 8:30 PM. Complete cash tally with Vikramaditya Zaveri.", time: "2 days ago", type: "system" },
      { id: "stn-10", title: "Staff Login Activated", message: "Credentials successfully authenticated for Didaar Grand Expo.", time: "3 days ago", type: "assignment" }
    ]
  },

  // Active POS Billing Cart
  posCart: {
    customerName: "Sneha Kapadia",
    customerPhone: "+91 98980 77665",
    customerCity: "Ahmedabad",
    selectedItems: {},
    paymentMode: "UPI / PhonePe"
  },

  // ================= 4. ADMIN STAFF MEMBER DATA (10 Visitors, 10 Stalls) =================
  adminStaffUser: {
    name: "Rajesh Varma",
    role: "Chief Entry & Stall Security Coordinator",
    staffId: "ADM-ST-04",
    phone: "+91 98220 33445",
    assignedExhibition: "Didaar Grand Festive Expo 2026",
    assignedGates: "Gate 1 (Visitor Entry) & Gate 3 (Stall Exit)",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    
    // 10 Registered Visitors logged at Gate 1
    registeredVisitors: [
      { passId: "DX-2026-VIP-8841", name: "Priya Sharma", phone: "+91 98765 43210", city: "Ahmedabad", category: "VIP Visitor", guestsCount: 2, entryTime: "28 Mar 2026, 10:45 AM", registeredBy: "Rajesh Varma" },
      { passId: "DX-2026-GEN-7712", name: "Ananya Mehta", phone: "+91 98210 99881", city: "Ahmedabad", category: "General Entry", guestsCount: 1, entryTime: "28 Mar 2026, 11:15 AM", registeredBy: "Rajesh Varma" },
      { passId: "DX-2026-GEN-7690", name: "Ritu Dave", phone: "+91 97110 55443", city: "Gandhinagar", category: "General Entry", guestsCount: 3, entryTime: "28 Mar 2026, 11:40 AM", registeredBy: "Rajesh Varma" },
      { passId: "DX-2026-VIP-8810", name: "Bhavin Shah", phone: "+91 98250 44332", city: "Ahmedabad", category: "VIP Visitor", guestsCount: 2, entryTime: "28 Mar 2026, 12:10 PM", registeredBy: "Rajesh Varma" },
      { passId: "DX-2026-GEN-7541", name: "Kavita Singhal", phone: "+91 98980 11229", city: "Ahmedabad", category: "General Entry", guestsCount: 1, entryTime: "28 Mar 2026, 01:25 PM", registeredBy: "Rajesh Varma" },
      { passId: "DX-2026-GEN-7430", name: "Deepak Patel", phone: "+91 98790 33221", city: "Surat", category: "General Entry", guestsCount: 4, entryTime: "28 Mar 2026, 02:40 PM", registeredBy: "Rajesh Varma" },
      { passId: "DX-2026-VIP-8790", name: "Alpa Trivedi", phone: "+91 97244 55667", city: "Ahmedabad", category: "VIP Visitor", guestsCount: 2, entryTime: "29 Mar 2026, 10:30 AM", registeredBy: "Rajesh Varma" },
      { passId: "DX-2026-VIP-8765", name: "Sunita Agarwal", phone: "+91 98110 77889", city: "Mumbai", category: "VIP Visitor", guestsCount: 3, entryTime: "29 Mar 2026, 11:15 AM", registeredBy: "Rajesh Varma" },
      { passId: "DX-2026-GEN-7320", name: "Neha Chokshi", phone: "+91 94260 88991", city: "Vadodara", category: "General Entry", guestsCount: 2, entryTime: "29 Mar 2026, 12:00 PM", registeredBy: "Rajesh Varma" },
      { passId: "DX-2026-VIP-8720", name: "Jinal Vora", phone: "+91 98255 11990", city: "Ahmedabad", category: "VIP Visitor", guestsCount: 1, entryTime: "29 Mar 2026, 01:10 PM", registeredBy: "Rajesh Varma" }
    ],

    // 10 Stalls in Exhibition Directory (Privacy-Masked Payment Status for Admin Staff)
    exhibitionStalls: [
      { stallNumber: "Stall A-12", stallName: "Zaveri Royal Jewels", ownerName: "Vikramaditya Zaveri", ownerPhone: "+91 98250 11223", category: "Fine Jewellery & Jadau", hall: "Hall A (Main Boulevard)", paymentStatus: "Payment Completed", exitClearanceStatus: "Approved for Exit", exitPassId: "EXIT-DX-2026-A12" },
      { stallNumber: "Stall B-08", stallName: "Gulabo Jaipur Couture", ownerName: "Meenakshi Rathore", ownerPhone: "+91 94140 88990", category: "Designer Wear & Silks", hall: "Silk Pavilion, Hall A", paymentStatus: "Remaining Dues Pending", exitClearanceStatus: "Exit Blocked", exitPassId: "EXIT-DX-2026-B08" },
      { stallNumber: "Stall C-15", stallName: "Mochi Heritage Juttis", ownerName: "Harpreet Singh", ownerPhone: "+91 98111 44556", category: "Handcrafted Footwear", hall: "Accessories Alley, Hall B", paymentStatus: "Payment Completed", exitClearanceStatus: "Approved for Exit", exitPassId: "EXIT-DX-2026-C15" },
      { stallNumber: "Stall D-04", stallName: "Virasat Weaves & Loom", ownerName: "Anandita Mukherjee", ownerPhone: "+91 97234 55667", category: "Handloom & Textiles", hall: "Artisan Hub, Hall B", paymentStatus: "Payment Completed", exitClearanceStatus: "Approved for Exit", exitPassId: "EXIT-DX-2026-D04" },
      { stallNumber: "Stall E-02", stallName: "Aura Living Home Decor", ownerName: "Sunil Narang", ownerPhone: "+91 98220 99881", category: "Luxury Home Decor", hall: "Lifestyle Wing, Hall B", paymentStatus: "Payment Completed", exitClearanceStatus: "Approved for Exit", exitPassId: "EXIT-DX-2026-E02" },
      { stallNumber: "Stall F-09", stallName: "Shringaar Organic Beauty", ownerName: "Tanvi Sheth", ownerPhone: "+91 98988 33441", category: "Organic Cosmetics", hall: "Wellness Zone, Hall B", paymentStatus: "Remaining Dues Pending", exitClearanceStatus: "Exit Blocked", exitPassId: "EXIT-DX-2026-F09" },
      { stallNumber: "Stall A-06", stallName: "Rajputana Polki Studio", ownerName: "Devendra Rathore", ownerPhone: "+91 94144 22331", category: "Royal Polki Diamonds", hall: "Hall A (Main Boulevard)", paymentStatus: "Payment Completed", exitClearanceStatus: "Approved for Exit", exitPassId: "EXIT-DX-2026-A06" },
      { stallNumber: "Stall B-14", stallName: "Banaras Heritage Silks", ownerName: "Mohanlal Mishra", ownerPhone: "+91 97211 44552", category: "Pure Silk Sarees", hall: "Silk Pavilion, Hall A", paymentStatus: "Payment Completed", exitClearanceStatus: "Approved for Exit", exitPassId: "EXIT-DX-2026-B14" },
      { stallNumber: "Stall D-11", stallName: "Kashmir Loom Treasures", ownerName: "Farooq Dar", ownerPhone: "+91 94190 77881", category: "Pashmina & Shawls", hall: "Artisan Hub, Hall B", paymentStatus: "Payment Completed", exitClearanceStatus: "Approved for Exit", exitPassId: "EXIT-DX-2026-D11" },
      { stallNumber: "Stall E-08", stallName: "Jharokha Terracotta Art", ownerName: "Gopal Kumhar", ownerPhone: "+91 98290 55441", category: "Terracotta & Pottery", hall: "Lifestyle Wing, Hall B", paymentStatus: "Payment Completed", exitClearanceStatus: "Approved for Exit", exitPassId: "EXIT-DX-2026-E08" }
    ],

    // 10 Admin Staff Notifications
    notifications: [
      { id: "asn-1", title: "Visitor Registration Peak", message: "1,420 visitors registered today across Gate 1 and Gate 2.", time: "5 mins ago", type: "pass" },
      { id: "asn-2", title: "Stall Exit Clearance Request", message: "Zaveri Royal Jewels (Stall A-12) requested Gate 3 teardown exit scan.", time: "20 mins ago", type: "approval" },
      { id: "asn-3", title: "Payment Clearance Verified", message: "Accounts desk confirmed full payment for Stall C-15 (Mochi Heritage).", time: "1 hour ago", type: "invoice" },
      { id: "asn-4", title: "VIP Pass Alert: Sunita Agarwal", message: "VIP visitor checked in through Gate 1 fast-track terminal.", time: "2 hours ago", type: "pass" },
      { id: "asn-5", title: "Exit Blocked for Stall B-08", message: "Gulabo Jaipur exit scan denied due to pending accounts balance.", time: "3 hours ago", type: "approval" },
      { id: "asn-6", title: "WhatsApp Gateway Online", message: "100% of generated passes delivered to visitors within 3 seconds.", time: "4 hours ago", type: "system" },
      { id: "asn-7", title: "Gate Duty Assignment Confirmed", message: "Rajesh Varma assigned to Gate 1 (Morning) and Gate 3 (Evening).", time: "Yesterday", type: "assignment" },
      { id: "asn-8", title: "Security Badge Sync Complete", message: "All 140 stall owners' exit QR codes synced with security scanners.", time: "Yesterday", type: "system" },
      { id: "asn-9", title: "Duplicate Entry Prevented", message: "Customer Pre-search prevented duplicate pass generation for Priya Sharma.", time: "2 days ago", type: "pass" },
      { id: "asn-10", title: "Shift Announcement", message: "Admin Staff briefing starts at 09:30 AM at Main Security Desk.", time: "3 days ago", type: "system" }
    ]
  },

  // ================= 10 EXHIBITIONS (MASTER DATABASE) =================
  exhibitions: [
    { id: "ex-1", name: "Didaar Grand Festive Expo 2026", city: "Ahmedabad", dates: "28 Mar - 30 Mar 2026", daysLeft: "Live Now", status: "Ongoing / Live", timing: "10:30 AM - 08:30 PM", venue: "Grand Hall A, Riverfront Convention Centre", address: "Sabarmati Riverfront, Ashram Road, Ahmedabad", totalStalls: 140, occupiedStalls: 128, rentCollected: 8450000, totalSalesGMV: 14280000, bannerImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80", description: "Gujarat's most anticipated luxury shopping celebration featuring over 140 curated pavilions across couture and jewellery." },
    { id: "ex-2", name: "Royal Heritage Bridal & Couture Fair", city: "Mumbai", dates: "12 Apr - 14 Apr 2026", daysLeft: "In 14 Days", status: "Upcoming", timing: "11:00 AM - 09:00 PM", venue: "Dome, NSCI SVP Stadium, Worli", address: "Worli, Mumbai, Maharashtra 400018", totalStalls: 185, occupiedStalls: 140, rentCollected: 9500000, totalSalesGMV: 0, bannerImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80", description: "Mumbai's biggest couture rendezvous showcasing master couturiers and royal jewelers." },
    { id: "ex-3", name: "Didaar Art & Handloom Utsav", city: "Surat", dates: "22 Apr - 24 Apr 2026", daysLeft: "In 24 Days", status: "Upcoming", timing: "10:00 AM - 08:00 PM", venue: "Sarsana International Exhibition Center", address: "Khajod, Sarsana, Surat, Gujarat 395007", totalStalls: 95, occupiedStalls: 60, rentCollected: 3800000, totalSalesGMV: 0, bannerImage: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80", description: "A tribute to Indian textiles featuring authentic Banarasi, Kanjeevaram, and Patola silk weavers." },
    { id: "ex-4", name: "Jaipur Royale Jewels & Gems Expo", city: "Jaipur", dates: "05 May - 07 May 2026", daysLeft: "In 37 Days", status: "Upcoming", timing: "10:30 AM - 08:30 PM", venue: "JECC Jaipur Exhibition & Convention Centre", address: "Sitapura Industrial Area, Jaipur, Rajasthan", totalStalls: 120, occupiedStalls: 85, rentCollected: 5600000, totalSalesGMV: 0, bannerImage: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80", description: "The pink city's crown jewel exhibition celebrating authentic Jadau, Polki, and emerald gemstone artisans." },
    { id: "ex-5", name: "Delhi Festive Lifestyle Showcase", city: "Delhi", dates: "18 May - 20 May 2026", daysLeft: "In 50 Days", status: "Upcoming", timing: "11:00 AM - 09:00 PM", venue: "Pragati Maidan, Hall 5", address: "Mathura Road, New Delhi 110001", totalStalls: 210, occupiedStalls: 150, rentCollected: 11200000, totalSalesGMV: 0, bannerImage: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80", description: "North India's largest luxury lifestyle expo presenting designer pret, bridal trousseau, and silver antiquities." },
    { id: "ex-6", name: "Pune Haute Couture & Bridal Expo", city: "Pune", dates: "02 Jun - 04 Jun 2026", daysLeft: "In 65 Days", status: "Upcoming", timing: "10:30 AM - 08:00 PM", venue: "Auto Cluster Exhibition Center", address: "Chinchwad, Pune, Maharashtra", totalStalls: 110, occupiedStalls: 72, rentCollected: 4600000, totalSalesGMV: 0, bannerImage: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=800&q=80", description: "Pune's elite shopping destination for wedding shoppers, boutique couturiers, and handcrafted shoes." },
    { id: "ex-7", name: "Bengaluru Silk & Gold Conclave", city: "Bengaluru", dates: "16 Jun - 18 Jun 2026", daysLeft: "In 79 Days", status: "Draft", timing: "10:00 AM - 08:30 PM", venue: "BIEC Bengaluru International Exhibition Centre", address: "Tumkur Road, Bengaluru, Karnataka", totalStalls: 160, occupiedStalls: 45, rentCollected: 2900000, totalSalesGMV: 0, bannerImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80", description: "Southern India's showcase of certified silk weavers, temple gold jewelers, and rosewood crafts." },
    { id: "ex-8", name: "Kolkata Royal Weaves & Silver Fair", city: "Kolkata", dates: "01 Jul - 03 Jul 2026", daysLeft: "In 94 Days", status: "Draft", timing: "11:00 AM - 08:30 PM", venue: "Biswa Bangla Mela Prangan", address: "EM Bypass, Kolkata, West Bengal", totalStalls: 130, occupiedStalls: 30, rentCollected: 1950000, totalSalesGMV: 0, bannerImage: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80", description: "Celebrating Bengal handloom, Kantha embroidery, Dhakai Jamdani, and filigree silver." },
    { id: "ex-9", name: "Chandigarh Grand Wedding Pavilion", city: "Chandigarh", dates: "15 Jul - 17 Jul 2026", daysLeft: "In 108 Days", status: "Draft", timing: "10:30 AM - 08:30 PM", venue: "CII Convention Centre", address: "Sector 31-A, Chandigarh", totalStalls: 100, occupiedStalls: 25, rentCollected: 1600000, totalSalesGMV: 0, bannerImage: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80", description: "Punjab's luxury bridal exhibition featuring master zardozi lehengas and double-cushioned juttis." },
    { id: "ex-10", name: "Hyderabad Nizami Jewels & Silk Expo", city: "Hyderabad", dates: "01 Aug - 03 Aug 2026", daysLeft: "In 125 Days", status: "Draft", timing: "10:30 AM - 08:30 PM", venue: "HITEX Exhibition Centre", address: "Izzat Nagar, Hyderabad, Telangana", totalStalls: 150, occupiedStalls: 20, rentCollected: 1300000, totalSalesGMV: 0, bannerImage: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=800&q=80", description: "Exclusive showcase of Basra pearls, Nizami polki jewellery, and Pochampally ikat weaves." }
  ],

  // 10 Customer / Visitor Stalls
  stalls: [
    { id: "stall-1", exhibitionId: "ex-1", stallNumber: "Stall A-12", name: "Zaveri Royal Jewels", category: "jewellery", categoryLabel: "Jewellery & Silver", owner: "Vikramaditya Zaveri", contact: "+91 98250 11223", locationInHall: "Main Boulevard, Hall A", rating: "4.9", reviewsCount: 128, logo: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=200&q=80", coverImage: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80", bio: "Heritage Jadau, Kundan & 92.5 Sterling Silver jewellery handcrafted by authentic generational artisans.", featuredProductsCount: 10 },
    { id: "stall-2", exhibitionId: "ex-1", stallNumber: "Stall B-08", name: "Gulabo Jaipur Couture", category: "clothing", categoryLabel: "Designer Wear", owner: "Meenakshi Rathore", contact: "+91 94140 88990", locationInHall: "Silk Pavilion, Hall A", rating: "4.8", reviewsCount: 94, logo: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=200&q=80", coverImage: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80", bio: "Bespoke handcrafted Anarkalis, pure Chanderi kurtas, hand-block printed lehengas and festive pret collections.", featuredProductsCount: 12 },
    { id: "stall-3", exhibitionId: "ex-1", stallNumber: "Stall C-15", name: "Mochi Heritage Juttis", category: "footwear", categoryLabel: "Footwear", owner: "Harpreet Singh", contact: "+91 98111 44556", locationInHall: "Accessories Alley, Hall B", rating: "4.7", reviewsCount: 65, logo: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=200&q=80", coverImage: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80", bio: "Double-cushioned genuine leather Punjabi juttis, zardozi embroidered mules, and festive footwear.", featuredProductsCount: 8 },
    { id: "stall-4", exhibitionId: "ex-1", stallNumber: "Stall D-04", name: "Virasat Weaves & Loom", category: "handicrafts", categoryLabel: "Handicrafts & Silk", owner: "Anandita Mukherjee", contact: "+91 97234 55667", locationInHall: "Artisan Hub, Hall B", rating: "4.9", reviewsCount: 82, logo: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=200&q=80", coverImage: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80", bio: "GI-tagged handloom textiles, authentic Pashmina stoles, Banarasi dupattas, and organic fabrics.", featuredProductsCount: 6 },
    { id: "stall-5", exhibitionId: "ex-1", stallNumber: "Stall E-02", name: "Aura Living Home Decor", category: "decor", categoryLabel: "Home Decor", owner: "Sunil Narang", contact: "+91 98220 99881", locationInHall: "Lifestyle Wing, Hall B", rating: "4.6", reviewsCount: 48, logo: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=200&q=80", coverImage: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80", bio: "Handcrafted brass diyas, marble inlay platters, aroma diffusers, and luxury home accents.", featuredProductsCount: 9 },
    { id: "stall-6", exhibitionId: "ex-1", stallNumber: "Stall F-09", name: "Shringaar Organic Beauty", category: "decor", categoryLabel: "Organic Beauty", owner: "Tanvi Sheth", contact: "+91 98988 33441", locationInHall: "Wellness Zone, Hall B", rating: "4.8", reviewsCount: 52, logo: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=200&q=80", coverImage: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80", bio: "Ayurvedic Kumkumadi oils, pure rosewater mists, ubtans, and natural bridal glow skincare.", featuredProductsCount: 7 },
    { id: "stall-7", exhibitionId: "ex-1", stallNumber: "Stall A-06", name: "Rajputana Polki Studio", category: "jewellery", categoryLabel: "Jewellery & Silver", owner: "Devendra Rathore", contact: "+91 94144 22331", locationInHall: "Main Boulevard, Hall A", rating: "4.9", reviewsCount: 110, logo: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=200&q=80", coverImage: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=800&q=80", bio: "Royal heritage uncut polki diamonds, ruby mathapattis, and vintage Rajputana bridal ornaments.", featuredProductsCount: 11 },
    { id: "stall-8", exhibitionId: "ex-1", stallNumber: "Stall B-14", name: "Banaras Heritage Silks", category: "clothing", categoryLabel: "Designer Wear", owner: "Mohanlal Mishra", contact: "+91 97211 44552", locationInHall: "Silk Pavilion, Hall A", rating: "4.9", reviewsCount: 88, logo: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=200&q=80", coverImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80", bio: "Direct master weavers of authentic Katan silk, Tanchoi, and Kadwa gold zari bridal sarees.", featuredProductsCount: 15 },
    { id: "stall-9", exhibitionId: "ex-1", stallNumber: "Stall D-11", name: "Kashmir Loom Treasures", category: "handicrafts", categoryLabel: "Handicrafts & Silk", owner: "Farooq Dar", contact: "+91 94190 77881", locationInHall: "Artisan Hub, Hall B", rating: "4.8", reviewsCount: 74, logo: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=200&q=80", coverImage: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80", bio: "GI-certified 100% pure Cashmere Pashmina shawls with Sozni hand-needle embroidery.", featuredProductsCount: 8 },
    { id: "stall-10", exhibitionId: "ex-1", stallNumber: "Stall E-08", name: "Jharokha Terracotta Art", category: "decor", categoryLabel: "Home Decor", owner: "Gopal Kumhar", contact: "+91 98290 55441", locationInHall: "Lifestyle Wing, Hall B", rating: "4.7", reviewsCount: 42, logo: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=200&q=80", coverImage: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80", bio: "Traditional terracotta pottery, clay handpainted wall murals, and blue pottery artifacts.", featuredProductsCount: 10 }
  ],

  // 10 Customer Products
  products: [
    { id: "prod-1", stallId: "stall-1", name: "Regal Kundan & Emerald Choker Set", category: "Jewellery", price: 18500, originalPrice: 22000, stockStatus: "In Stock", stockQuantity: 6, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80", description: "Exquisite 22k gold-plated brass choker set adorned with semi-precious Colombian emerald drops and handcrafted Kundan polki work with matching jhumkas." },
    { id: "prod-2", stallId: "stall-1", name: "Temple Motif Antique Silver Kada", category: "Jewellery", price: 7800, originalPrice: 9200, stockStatus: "Only 3 Left", stockQuantity: 3, image: "https://images.unsplash.com/photo-1611591475102-460a7f580001?auto=format&fit=crop&w=600&q=80", description: "Authentic 92.5 hallmarked antique sterling silver openable kada featuring intricately carved peacock and lotus temple motifs." },
    { id: "prod-3", stallId: "stall-2", name: "Gulab-Bagh Chanderi Anarkali Set", category: "Clothing", price: 6200, originalPrice: 7500, stockStatus: "In Stock", stockQuantity: 8, image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80", description: "Pure Chanderi silk 3-piece set comprising an embellished kalidar Anarkali with gota patti detailing, matching pants, and organza dupatta." },
    { id: "prod-4", stallId: "stall-2", name: "Pastel Blossom Hand-Painted Organza Saree", category: "Clothing", price: 8900, originalPrice: 10500, stockStatus: "Only 1 Left", stockQuantity: 1, image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80", description: "Hand-painted blush pink sheer organza saree with scalloped pearl borders and unstitched raw silk blouse piece." },
    { id: "prod-5", stallId: "stall-3", name: "Zardozi Blossom Bridal Jutti", category: "Footwear", price: 2400, originalPrice: 3000, stockStatus: "In Stock", stockQuantity: 12, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80", description: "Hand-embroidered metallic dabka and zardozi thread juttis on champagne silk base with double-layer memory foam padding." },
    { id: "prod-6", stallId: "stall-4", name: "Banarasi Katan Silk Floral Dupatta", category: "Handicrafts", price: 4500, originalPrice: 5500, stockStatus: "In Stock", stockQuantity: 5, image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80", description: "Handwoven pure Katan silk dupatta with rich gold zari Kadwa floral jaal work straight from weavers of Varanasi." },
    { id: "prod-7", stallId: "stall-5", name: "Royal Heritage Brass Urli Diya Chandelier", category: "Home Decor", price: 3600, originalPrice: 4200, stockStatus: "In Stock", stockQuantity: 4, image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80", description: "Traditional heavy cast brass urli floating diya with engraved peacock finial." },
    { id: "prod-8", stallId: "stall-6", name: "Kumkumadi Bridal Glow Night Elixir", category: "Organic Beauty", price: 1950, originalPrice: 2400, stockStatus: "In Stock", stockQuantity: 15, image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80", description: "Certified Ayurvedic saffron & sandalwood face oil for radiant, youthful complexion." },
    { id: "prod-9", stallId: "stall-7", name: "Rajputana Royal Hasli Necklace", category: "Jewellery", price: 24000, originalPrice: 28000, stockStatus: "Only 2 Left", stockQuantity: 2, image: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=600&q=80", description: "Heavy bridal hasli necklace with meenakari reverse work and certified polki stones." },
    { id: "prod-10", stallId: "stall-9", name: "Authentic Cashmere Pashmina Stole", category: "Handicrafts", price: 11000, originalPrice: 13500, stockStatus: "In Stock", stockQuantity: 7, image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80", description: "Hand-spun ultra-soft Cashmere stole with delicate Sozni floral needlework." }
  ],

  // 10 Cities
  cities: ["Ahmedabad", "Mumbai", "Surat", "Jaipur", "Delhi", "Pune", "Bengaluru", "Kolkata", "Chandigarh", "Hyderabad"],
  currentCity: "Ahmedabad",

  // Categories
  categories: [
    { id: "all", name: "All", icon: "sparkles" },
    { id: "jewellery", name: "Jewellery", icon: "gem" },
    { id: "clothing", name: "Clothing", icon: "shirt" },
    { id: "footwear", name: "Footwear", icon: "footprints" },
    { id: "handicrafts", name: "Handicrafts", icon: "palette" },
    { id: "decor", name: "Home Decor", icon: "house" }
  ],

  pass: {
    passId: "DX-2026-VIP-8841",
    visitorName: "Priya Sharma",
    phone: "+91 98765 43210",
    exhibitionName: "Didaar Grand Festive Expo 2026",
    venue: "Grand Hall A, Riverfront Convention Centre",
    city: "Ahmedabad",
    validDates: "28 Mar - 30 Mar 2026",
    qrCodeImage: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=DX-2026-VIP-8841-PRIYA-SHARMA-DIDAAR"
  },

  festivalPost: {
    template: 'festive',
    title: "Diwali & Wedding Grand Showcase",
    tagline: "Up to 20% Off on Heritage Polki & Jadau Jewellery",
    stallTag: "Visit Us at Stall A-12 • Hall A",
    dates: "28 Mar - 30 Mar 2026",
    venue: "Riverfront Exhibition Centre, Ahmedabad",
    brandName: "Zaveri Royal Jewels"
  }
};

// Application Controller
const App = {
  portalMode: 'mobile',
  currentRole: 'customer',
  currentScreen: 'auth',
  selectedCategory: 'all',
  currentAdminSection: 'admin-dash',

  init() {
    this.updateUserRole(this.currentRole);
    this.renderCitySelector();
    this.renderCategories();
    this.renderExhibitions();
    this.renderStalls();
    this.renderProducts();
    this.renderCustomerInvoices();
    this.renderCustomerNotifications();
    this.renderPass();

    // Stall Owner renderers
    this.renderOwnerDashboard();
    this.renderOwnerInventory();
    this.renderOwnerStaff();
    this.renderOwnerBills();
    this.renderOwnerProfile();
    this.renderFestivalPostPreview();

    // Staff Member renderers
    this.renderStaffPOS();
    this.renderStaffStock();
    this.renderStaffSales();
    this.renderStaffExhibition();
    this.renderStaffProfile();

    // Admin Staff renderers
    this.renderAdminVisitors();
    this.renderAdminStalls();
    this.renderAdminProfile();

    // Super Admin Web Panel renderers
    this.renderAdminWebPanel();

    this.setupEventListeners();
    this.switchPortal('mobile');
    this.switchScreen('auth');
  },

  switchPortal(mode) {
    this.portalMode = mode;
    AppData.portalMode = mode;

    const mobileView = document.getElementById('mobileSimulatorView');
    const webAdminView = document.getElementById('superAdminWebView');
    const toggleMobileBtn = document.getElementById('toggleMobilePortalBtn');
    const toggleAdminBtn = document.getElementById('toggleAdminPortalBtn');

    if (mode === 'mobile') {
      if (mobileView) mobileView.style.display = 'flex';
      if (webAdminView) webAdminView.style.display = 'none';
      if (toggleMobileBtn) toggleMobileBtn.className = "px-3 py-1.5 rounded-lg bg-brand-purple-dark text-white font-bold text-xs shadow flex items-center gap-1.5";
      if (toggleAdminBtn) toggleAdminBtn.className = "px-3 py-1.5 rounded-lg text-purple-200 hover:text-white font-bold text-xs flex items-center gap-1.5";
    } else {
      if (mobileView) mobileView.style.display = 'none';
      if (webAdminView) webAdminView.style.display = 'block';
      if (toggleAdminBtn) toggleAdminBtn.className = "px-3 py-1.5 rounded-lg bg-brand-purple-dark text-white font-bold text-xs shadow flex items-center gap-1.5";
      if (toggleMobileBtn) toggleMobileBtn.className = "px-3 py-1.5 rounded-lg text-purple-200 hover:text-white font-bold text-xs flex items-center gap-1.5";
      this.renderAdminWebPanel();
    }
  },

  setLoginRole(role) {
    this.currentRole = role;
    AppData.currentRole = role;

    const userTypeSelect = document.getElementById('userTypeSelect');
    if (userTypeSelect) userTypeSelect.value = role;

    const desktopRoleSelect = document.getElementById('desktopRoleSelect');
    if (desktopRoleSelect) desktopRoleSelect.value = role;

    const authNote = document.getElementById('authRoleNotice');
    const authPhoneInput = document.getElementById('authPhoneInput');

    if (role === 'customer') {
      if (authNote) authNote.innerHTML = `<i class="fa-solid fa-circle-info text-brand-purple"></i> Registered visitors can access 10+ exhibitions, 10+ stalls, live stock & instant WhatsApp passes.`;
      if (authPhoneInput) authPhoneInput.value = "+91 98765 43210";
    } else if (role === 'stall_owner') {
      if (authNote) authNote.innerHTML = `<i class="fa-solid fa-shield-halved text-brand-purple"></i> Stall Owner portal: Manage 10+ staff members, 10+ master products, real-time sales & exit clearance.`;
      if (authPhoneInput) authPhoneInput.value = "vikram@zaverijewels.com";
    } else if (role === 'staff') {
      if (authNote) authNote.innerHTML = `<i class="fa-solid fa-id-badge text-brand-purple"></i> Stall Staff Member portal: Access 10+ in-hand allocated products, fast POS billing & WhatsApp invoices.`;
      if (authPhoneInput) authPhoneInput.value = "+91 98790 12345";
    } else if (role === 'admin_staff') {
      if (authNote) authNote.innerHTML = `<i class="fa-solid fa-user-shield text-brand-purple"></i> Admin Staff portal: Register visitor entries, deliver WhatsApp passes & verify 10+ stall exit QRs.`;
      if (authPhoneInput) authPhoneInput.value = "rajesh.varma@didaarexhibition.com";
    }
  },

  handleAuthSubmit(action) {
    AppData.isLoggedIn = true;
    this.updateUserRole(this.currentRole);

    if (this.currentRole === 'customer') {
      this.switchScreen('home');
      this.showToast("Welcome back, Priya Sharma ✨");
    } else if (this.currentRole === 'stall_owner') {
      this.switchScreen('owner-dashboard');
      this.showToast("Stall Owner Portal: Zaveri Royal Jewels (Stall A-12) 🏪");
    } else if (this.currentRole === 'staff') {
      this.switchScreen('staff-pos');
      this.showToast("Staff Member Portal: Nilesh Patel @ Stall A-12 🏷️");
    } else if (this.currentRole === 'admin_staff') {
      this.switchScreen('admin-entry');
      this.showToast("Admin Staff Portal: Rajesh Varma (Gate Coordinator) 🛡️");
    }
  },

  updateUserRole(role) {
    this.currentRole = role;
    AppData.currentRole = role;

    const customerNav = document.getElementById('customerBottomNav');
    const ownerNav = document.getElementById('ownerBottomNav');
    const staffNav = document.getElementById('staffBottomNav');
    const adminNav = document.getElementById('adminBottomNav');
    const userGreeting = document.getElementById('userGreeting');
    const userRoleBadge = document.getElementById('userRoleBadge');

    if (customerNav) customerNav.style.display = 'none';
    if (ownerNav) ownerNav.style.display = 'none';
    if (staffNav) staffNav.style.display = 'none';
    if (adminNav) adminNav.style.display = 'none';

    if (role === 'customer') {
      if (customerNav) customerNav.style.display = 'flex';
      if (userGreeting) userGreeting.textContent = `Hello, Priya ✨`;
      if (userRoleBadge) {
        userRoleBadge.textContent = "Customer / Visitor";
        userRoleBadge.className = "text-[10px] font-bold bg-[#F8C1C7] text-[#543377] px-2.5 py-0.5 rounded-full uppercase tracking-wider";
      }
      this.renderNotifications('customer');
    } else if (role === 'stall_owner') {
      if (ownerNav) ownerNav.style.display = 'flex';
      if (userGreeting) userGreeting.textContent = `Zaveri Royal Jewels 🏪`;
      if (userRoleBadge) {
        userRoleBadge.textContent = "Stall Owner (Stall A-12)";
        userRoleBadge.className = "text-[10px] font-bold bg-amber-200 text-amber-900 px-2.5 py-0.5 rounded-full uppercase tracking-wider";
      }
      this.renderNotifications('stall_owner');
    } else if (role === 'staff') {
      if (staffNav) staffNav.style.display = 'flex';
      if (userGreeting) userGreeting.textContent = `Nilesh Patel (Staff) 🏷️`;
      if (userRoleBadge) {
        userRoleBadge.textContent = "Staff Member @ Stall A-12";
        userRoleBadge.className = "text-[10px] font-bold bg-emerald-200 text-emerald-950 px-2.5 py-0.5 rounded-full uppercase tracking-wider";
      }
      this.renderNotifications('staff');
    } else if (role === 'admin_staff') {
      if (adminNav) adminNav.style.display = 'flex';
      if (userGreeting) userGreeting.textContent = `Rajesh Varma (Admin Staff) 🛡️`;
      if (userRoleBadge) {
        userRoleBadge.textContent = "Admin Staff (Gate Security)";
        userRoleBadge.className = "text-[10px] font-bold bg-purple-200 text-purple-950 px-2.5 py-0.5 rounded-full uppercase tracking-wider";
      }
      this.renderNotifications('admin_staff');
    }

    this.updateScreenDropdownOptions(role);
  },

  updateScreenDropdownOptions(role) {
    const picker = document.getElementById('screenPicker');
    if (!picker) return;

    if (role === 'customer') {
      picker.innerHTML = `
        <optgroup label="Customer / Visitor Modules">
          <option value="auth">🔐 1. Login Screen</option>
          <option value="home">🏠 2. Home / Discover Exhibitions (10 Exhibitions)</option>
          <option value="stalls">🛍️ 3. Stalls & Category Browsing (10 Stalls)</option>
          <option value="products">💎 4. Product Catalog & Live Stock (10 Products)</option>
          <option value="pass">🎟️ 5. Digital Exhibition Pass (QR)</option>
          <option value="purchases">🧾 6. Purchase History & Invoices (10 Invoices)</option>
          <option value="notifications">🔔 7. Notifications (10 Alerts)</option>
        </optgroup>
      `;
    } else if (role === 'stall_owner') {
      picker.innerHTML = `
        <optgroup label="Stall Owner Modules">
          <option value="auth">🔐 1. Stall Owner Login</option>
          <option value="owner-dashboard">📊 2. Stall Dashboard & Status</option>
          <option value="owner-inventory">📦 3. Master Inventory & Stock (10 Products)</option>
          <option value="owner-staff">👥 4. Staff Management & Onboarding (10 Staff)</option>
          <option value="owner-sales">📈 5. Live Sales & Bill Monitoring (10 Bills)</option>
          <option value="owner-post-studio">🎨 6. Festival Post Creator (PNG Export)</option>
          <option value="owner-profile">🏪 7. Business Profile & Exit Pass</option>
          <option value="notifications">🔔 8. Stall Notifications (10 Alerts)</option>
        </optgroup>
      `;
    } else if (role === 'staff') {
      picker.innerHTML = `
        <optgroup label="Staff Member Modules">
          <option value="auth">🔐 1. Staff Member Login</option>
          <option value="staff-pos">🧾 2. POS Quick Billing & Invoicing (10 Products)</option>
          <option value="staff-stock">📦 3. In-Hand Allocated Stock (10 Products)</option>
          <option value="staff-sales">📊 4. My Sales History (10 Bills)</option>
          <option value="staff-expo">🎪 5. Assigned Exhibition Details</option>
          <option value="staff-profile">👤 6. Staff Profile & Access Policy</option>
          <option value="notifications">🔔 7. Staff Notifications (10 Alerts)</option>
        </optgroup>
      `;
    } else if (role === 'admin_staff') {
      picker.innerHTML = `
        <optgroup label="Admin Staff Operations">
          <option value="auth">🔐 1. Admin Staff Secure Login</option>
          <option value="admin-entry">🎟️ 2. Visitor Entry Desk & WhatsApp Pass</option>
          <option value="admin-visitors">👥 3. Visitor Tracking Log (10 Visitors)</option>
          <option value="admin-stalls">🏪 4. Stall Directory & Dues (10 Stalls)</option>
          <option value="admin-exit-scan">🚪 5. Stall Exit QR Code Scanner (10 Stalls)</option>
          <option value="admin-profile">👤 6. Admin Staff Profile & Gate Duty</option>
          <option value="notifications">🔔 7. Admin Notifications (10 Alerts)</option>
        </optgroup>
      `;
    }
  },

  switchScreen(screenName) {
    this.currentScreen = screenName;

    document.querySelectorAll('.screen-view').forEach(screen => {
      screen.classList.remove('active');
    });

    const target = document.getElementById(`screen-${screenName}`);
    if (target) {
      target.classList.add('active');
      target.scrollTop = 0;
    }

    document.querySelectorAll('.nav-item').forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.screen === screenName) {
        btn.classList.add('active');
      }
    });

    const picker = document.getElementById('screenPicker');
    if (picker) picker.value = screenName;

    const customerNav = document.getElementById('customerBottomNav');
    const ownerNav = document.getElementById('ownerBottomNav');
    const staffNav = document.getElementById('staffBottomNav');
    const adminNav = document.getElementById('adminBottomNav');
    const topBar = document.getElementById('appTopBar');

    if (screenName === 'auth') {
      if (customerNav) customerNav.style.display = 'none';
      if (ownerNav) ownerNav.style.display = 'none';
      if (staffNav) staffNav.style.display = 'none';
      if (adminNav) adminNav.style.display = 'none';
      if (topBar) topBar.style.display = 'none';
    } else {
      if (topBar) topBar.style.display = 'flex';
      if (this.currentRole === 'customer' && customerNav) customerNav.style.display = 'flex';
      else if (this.currentRole === 'stall_owner' && ownerNav) ownerNav.style.display = 'flex';
      else if (this.currentRole === 'staff' && staffNav) staffNav.style.display = 'flex';
      else if (this.currentRole === 'admin_staff' && adminNav) adminNav.style.display = 'flex';
    }
  },

  // ================= 1. CUSTOMER RENDERERS (10 Exhibitions, 10 Stalls, 10 Products, 10 Invoices) =================
  renderCitySelector() {
    const cityContainer = document.getElementById('cityListModal');
    if (!cityContainer) return;
    
    cityContainer.innerHTML = AppData.cities.map(city => `
      <button onclick="App.selectCity('${city}')" class="w-full flex items-center justify-between p-3.5 rounded-2xl border ${city === AppData.currentCity ? 'border-brand-purple bg-purple-50/50 text-brand-purple-dark font-bold' : 'border-gray-100 bg-white text-gray-700 hover:bg-gray-50'} transition-all mb-2">
        <div class="flex items-center gap-3">
          <i class="fa-solid fa-location-dot ${city === AppData.currentCity ? 'text-brand-purple' : 'text-gray-400'}"></i>
          <span>${city}</span>
        </div>
        ${city === AppData.currentCity ? '<i class="fa-solid fa-circle-check text-brand-purple"></i>' : ''}
      </button>
    `).join('');
  },

  selectCity(city) {
    AppData.currentCity = city;
    const cityLabel = document.getElementById('currentCityLabel');
    if (cityLabel) cityLabel.textContent = city;
    this.renderCitySelector();
    this.renderExhibitions();
    this.closeModal('cityModal');
    this.showToast(`Switched city to ${city}`);
  },

  renderCategories() {
    const catContainer = document.getElementById('categoryBar');
    if (!catContainer) return;

    catContainer.innerHTML = AppData.categories.map(cat => `
      <button onclick="App.filterCategory('${cat.id}')" class="shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all ${this.selectedCategory === cat.id ? 'bg-brand-purple-dark text-white shadow-md' : 'bg-white text-gray-600 border border-gray-100 hover:border-purple-200'}">
        <span>${cat.name}</span>
      </button>
    `).join('');
  },

  filterCategory(catId) {
    this.selectedCategory = catId;
    this.renderCategories();
    this.renderStalls();
  },

  renderExhibitions() {
    const container = document.getElementById('featuredExhibitionList');
    if (!container) return;

    const filtered = AppData.exhibitions.filter(e => e.city === AppData.currentCity || AppData.currentCity === "All");
    const displayList = filtered.length > 0 ? filtered : AppData.exhibitions;

    container.innerHTML = displayList.map(ex => `
      <div onclick="App.openExhibitionDetail('${ex.id}')" class="bg-white rounded-3xl overflow-hidden card-shadow border border-purple-50 transition-all hover:-translate-y-1 cursor-pointer mb-4">
        <div class="relative h-44 w-full">
          <img src="${ex.bannerImage}" alt="${ex.name}" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div class="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-brand-purple-dark flex items-center gap-1.5 shadow-sm">
            <span class="status-dot bg-emerald-500 animate-pulse"></span>
            ${ex.daysLeft}
          </div>
          <div class="absolute top-3 right-3 bg-brand-pink-soft text-purple-950 font-extrabold text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider">
            ${ex.city}
          </div>
          <div class="absolute bottom-3 left-3 right-3 text-white">
            <h3 class="font-bold text-base leading-tight text-white drop-shadow-sm">${ex.name}</h3>
            <p class="text-xs text-pink-100 flex items-center gap-1 mt-1 opacity-90">
              <i class="fa-regular fa-calendar"></i> ${ex.dates}
            </p>
          </div>
        </div>

        <div class="p-4 flex items-center justify-between bg-white">
          <div class="flex items-center gap-2 text-xs text-gray-500">
            <i class="fa-solid fa-location-dot text-brand-purple"></i>
            <span class="line-clamp-1 font-medium text-gray-700">${ex.venue}</span>
          </div>
          <span class="text-brand-purple text-xs font-bold flex items-center gap-1">
            Explore <i class="fa-solid fa-arrow-right text-[10px]"></i>
          </span>
        </div>
      </div>
    `).join('');
  },

  openExhibitionDetail(exId) {
    const ex = AppData.exhibitions.find(e => e.id === exId);
    if (!ex) return;

    const detailContainer = document.getElementById('exhibitionDetailContent');
    if (!detailContainer) return;

    detailContainer.innerHTML = `
      <div class="relative h-52 w-full">
        <img src="${ex.bannerImage}" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        <button onclick="App.switchScreen('home')" class="absolute top-4 left-4 w-9 h-9 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-gray-800 shadow">
          <i class="fa-solid fa-arrow-left text-sm"></i>
        </button>
        <div class="absolute bottom-3 left-4 right-4 text-white">
          <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-brand-pink text-purple-950 uppercase tracking-wide inline-block mb-1">${ex.city} Exhibition</span>
          <h2 class="text-lg font-bold leading-tight">${ex.name}</h2>
        </div>
      </div>

      <div class="p-4 space-y-4">
        <div class="bg-purple-50/60 rounded-2xl p-4 border border-purple-100/80 space-y-2.5 text-xs text-gray-700">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-xl bg-purple-100 flex items-center justify-center text-brand-purple shrink-0"><i class="fa-regular fa-calendar-days"></i></div>
            <div><p class="font-bold text-gray-900">${ex.dates}</p><p class="text-gray-500">${ex.timing}</p></div>
          </div>
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-xl bg-purple-100 flex items-center justify-center text-brand-purple shrink-0"><i class="fa-solid fa-location-dot"></i></div>
            <div><p class="font-bold text-gray-900">${ex.venue}</p><p class="text-gray-500">${ex.address}</p></div>
          </div>
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-xl bg-purple-100 flex items-center justify-center text-brand-purple shrink-0"><i class="fa-solid fa-store"></i></div>
            <div><p class="font-bold text-gray-900">${ex.totalStalls}+ Participating Stalls</p><p class="text-gray-500">Fine Jewellery, Couture, Footwear, Handicrafts & Decor</p></div>
          </div>
        </div>

        <div>
          <h4 class="font-bold text-sm text-gray-900 mb-1.5">About This Exhibition</h4>
          <p class="text-xs text-gray-600 leading-relaxed">${ex.description}</p>
        </div>

        <div>
          <div class="flex items-center justify-between mb-3">
            <h4 class="font-bold text-sm text-gray-900">Featured Participating Stalls (10)</h4>
            <button onclick="App.switchScreen('stalls')" class="text-xs font-bold text-brand-purple">View All</button>
          </div>
          <div class="space-y-3">
            ${AppData.stalls.map(s => this.renderStallCardHTML(s)).join('')}
          </div>
        </div>
      </div>
    `;

    this.switchScreen('exhibition-detail');
  },

  renderStalls() {
    const container = document.getElementById('stallListingContainer');
    if (!container) return;

    let list = AppData.stalls;
    if (this.selectedCategory !== 'all') {
      list = list.filter(s => s.category === this.selectedCategory);
    }

    container.innerHTML = list.map(s => this.renderStallCardHTML(s)).join('');
  },

  renderStallCardHTML(stall) {
    return `
      <div onclick="App.openStallDetail('${stall.id}')" class="bg-white rounded-2xl p-3.5 border border-gray-100 soft-shadow flex gap-3.5 transition-all hover:border-purple-200 cursor-pointer">
        <img src="${stall.logo}" alt="${stall.name}" class="w-16 h-16 rounded-xl object-cover border border-purple-50 shrink-0">
        <div class="flex-1 min-w-0">
          <div class="flex items-center justify-between">
            <span class="bg-purple-100 text-brand-purple-dark text-[10px] font-extrabold px-2 py-0.5 rounded-md">${stall.stallNumber}</span>
            <div class="flex items-center gap-1 text-[11px] font-bold text-amber-500">
              <i class="fa-solid fa-star text-[10px]"></i>
              <span>${stall.rating} (${stall.reviewsCount || 45})</span>
            </div>
          </div>
          <h4 class="font-bold text-sm text-gray-900 truncate mt-1">${stall.name}</h4>
          <p class="text-[11px] text-gray-500 truncate">${stall.categoryLabel} • ${stall.locationInHall}</p>
          <span class="text-[10px] font-semibold text-brand-purple bg-pink-50 px-2 py-0.5 rounded-full inline-block mt-1">
            ${stall.featuredProductsCount || 8} Products on Display
          </span>
        </div>
      </div>
    `;
  },

  openStallDetail(stallId) {
    const stall = AppData.stalls.find(s => s.id === stallId);
    if (!stall) return;

    const stallProducts = AppData.products.filter(p => p.stallId === stallId);
    const displayProducts = stallProducts.length > 0 ? stallProducts : AppData.products.slice(0, 4);

    const container = document.getElementById('stallDetailContent');
    if (!container) return;

    container.innerHTML = `
      <div class="relative h-48 w-full">
        <img src="${stall.coverImage}" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        <button onclick="App.switchScreen('stalls')" class="absolute top-4 left-4 w-9 h-9 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-gray-800 shadow">
          <i class="fa-solid fa-arrow-left text-sm"></i>
        </button>
        <div class="absolute top-4 right-4 bg-brand-pink text-purple-950 font-extrabold text-xs px-3 py-1 rounded-full shadow">
          ${stall.stallNumber}
        </div>
        <div class="absolute -bottom-6 left-4 flex items-end gap-3">
          <img src="${stall.logo}" class="w-16 h-16 rounded-2xl border-2 border-white object-cover shadow-md bg-white">
        </div>
      </div>

      <div class="pt-8 px-4 space-y-4">
        <div>
          <h2 class="text-lg font-bold text-gray-900">${stall.name}</h2>
          <p class="text-xs text-brand-purple font-semibold mt-0.5">${stall.categoryLabel} • ${stall.locationInHall}</p>
        </div>

        <div class="bg-gray-50 p-3.5 rounded-2xl border border-gray-100 text-xs text-gray-600 space-y-2">
          <p class="leading-relaxed">${stall.bio}</p>
          <div class="pt-2 border-t border-gray-200 flex items-center justify-between text-gray-700">
            <span><i class="fa-solid fa-user-tie text-brand-purple"></i> Owner: <strong>${stall.owner}</strong></span>
            <span><i class="fa-solid fa-phone text-brand-purple"></i> ${stall.contact}</span>
          </div>
        </div>

        <div>
          <h4 class="font-bold text-sm text-gray-900 mb-3">Products on Display (${displayProducts.length})</h4>
          <div class="grid grid-cols-2 gap-3">
            ${displayProducts.map(p => this.renderProductCardHTML(p)).join('')}
          </div>
        </div>
      </div>
    `;

    this.switchScreen('stall-detail');
  },

  renderProducts() {
    const container = document.getElementById('allProductsContainer');
    if (!container) return;
    container.innerHTML = AppData.products.map(p => this.renderProductCardHTML(p)).join('');
  },

  renderProductCardHTML(product) {
    const stall = AppData.stalls.find(s => s.id === product.stallId);
    return `
      <div onclick="App.openProductModal('${product.id}')" class="bg-white rounded-2xl overflow-hidden border border-gray-100 card-shadow transition-all hover:border-purple-200 cursor-pointer flex flex-col">
        <div class="relative h-36 w-full overflow-hidden bg-gray-100">
          <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
          <span class="absolute top-2 left-2 text-[9px] font-bold px-2 py-0.5 rounded-full shadow-sm ${product.stockQuantity <= 2 ? 'bg-rose-500 text-white' : 'bg-emerald-500 text-white'}">
            ${product.stockStatus}
          </span>
        </div>
        <div class="p-3 flex-1 flex flex-col justify-between">
          <div>
            <span class="text-[9px] font-semibold text-brand-purple uppercase tracking-wider block">${stall ? stall.name : 'Exhibition Stall'}</span>
            <h4 class="font-bold text-xs text-gray-900 line-clamp-2 mt-0.5">${product.name}</h4>
          </div>
          <div class="mt-2 pt-2 border-t border-gray-50 flex items-center justify-between">
            <span class="font-extrabold text-xs text-brand-purple-dark">₹${product.price.toLocaleString('en-IN')}</span>
            <button class="w-6 h-6 rounded-full bg-purple-50 text-brand-purple flex items-center justify-center text-[10px]">
              <i class="fa-solid fa-eye"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  },

  openProductModal(productId) {
    const prod = AppData.products.find(p => p.id === productId) || AppData.products[0];
    const stall = AppData.stalls.find(s => s.id === prod.stallId) || AppData.stalls[0];

    const modalBody = document.getElementById('productModalBody');
    if (!modalBody) return;

    modalBody.innerHTML = `
      <div class="relative -mx-6 -mt-6 mb-4">
        <img src="${prod.image}" class="w-full h-56 object-cover rounded-t-3xl">
        <button onclick="App.closeModal('productModal')" class="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center shadow">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="space-y-3.5 text-xs">
        <div class="flex items-center justify-between">
          <span class="bg-purple-100 text-brand-purple-dark text-[10px] font-extrabold px-2.5 py-1 rounded-lg">
            ${stall.stallNumber} • ${stall.name}
          </span>
          <span class="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
            ● ${prod.stockStatus}
          </span>
        </div>

        <div>
          <h3 class="text-base font-bold text-gray-900">${prod.name}</h3>
          <p class="text-xs text-brand-purple font-medium mt-0.5">${prod.category} Collection</p>
        </div>

        <div class="flex items-baseline gap-2 bg-purple-50/50 p-3 rounded-2xl border border-purple-100">
          <span class="text-xl font-extrabold text-brand-purple-dark">₹${prod.price.toLocaleString('en-IN')}</span>
          ${prod.originalPrice ? `<span class="text-xs text-gray-400 line-through">₹${prod.originalPrice.toLocaleString('en-IN')}</span>` : ''}
          <span class="text-[10px] font-bold text-emerald-600 bg-emerald-100/70 px-2 py-0.5 rounded-md ml-auto">Exhibition Special Price</span>
        </div>

        <div>
          <h5 class="text-xs font-bold text-gray-900 mb-1">Description</h5>
          <p class="text-xs text-gray-600 leading-relaxed">${prod.description}</p>
        </div>

        <div class="bg-amber-50 border border-amber-200 rounded-2xl p-3 text-[11px] text-amber-800">
          <strong>Physical Purchase:</strong> Visit <strong>${stall.stallNumber}</strong> in Hall A to buy. Staff will generate your e-invoice on-ground.
        </div>
      </div>
    `;

    this.openModal('productModal');
  },

  renderCustomerInvoices() {
    const container = document.getElementById('invoiceListContainer');
    if (!container) return;

    container.innerHTML = AppData.customerInvoices.map(inv => `
      <div onclick="App.openInvoiceModal('${inv.invoiceNo}')" class="bg-white rounded-2xl p-3.5 border border-gray-100 card-shadow cursor-pointer mb-3 hover:border-purple-200 transition-all">
        <div class="flex items-center justify-between border-b pb-2 mb-2">
          <div>
            <span class="font-mono text-xs font-bold text-brand-purple-dark">${inv.invoiceNo}</span>
            <p class="text-[10px] text-gray-400">${inv.date}</p>
          </div>
          <span class="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full">
            PAID (${inv.paymentMethod.split(' ')[0]})
          </span>
        </div>

        <div class="flex items-center justify-between">
          <div>
            <h4 class="font-bold text-xs text-gray-900">${inv.stallName}</h4>
            <p class="text-[11px] text-gray-500">${inv.stallNumber} • ${inv.items.length} item(s)</p>
          </div>
          <div class="text-right">
            <span class="font-extrabold text-sm text-gray-900">₹${inv.totalAmount.toLocaleString('en-IN')}</span>
            <span class="text-[10px] text-brand-purple font-semibold block mt-0.5"><i class="fa-regular fa-file-pdf"></i> View PDF</span>
          </div>
        </div>
      </div>
    `).join('');
  },

  openInvoiceModal(invoiceNo) {
    const inv = AppData.customerInvoices.find(i => i.invoiceNo === invoiceNo) || AppData.customerInvoices[0];

    const modalBody = document.getElementById('invoiceModalBody');
    if (!modalBody) return;

    modalBody.innerHTML = `
      <div class="invoice-paper p-5 text-xs">
        <div class="flex items-start justify-between border-b pb-3">
          <div>
            <h2 class="text-base font-extrabold text-brand-purple-dark">DIDAAR EXHIBITIONS</h2>
            <p class="text-[10px] text-gray-500">Official Purchase Tax Invoice</p>
          </div>
          <div class="text-right">
            <span class="bg-brand-purple text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase">TAX INVOICE</span>
            <p class="font-mono text-xs font-bold mt-1">${inv.invoiceNo}</p>
            <p class="text-[10px] text-gray-400">${inv.date}</p>
          </div>
        </div>

        <div class="py-2.5 border-b text-[11px] grid grid-cols-2 gap-2">
          <div>
            <span class="text-[10px] text-gray-400 font-bold uppercase block">Stall</span>
            <p class="font-bold text-gray-900">${inv.stallName}</p>
            <p class="text-gray-500">${inv.stallNumber}</p>
          </div>
          <div>
            <span class="text-[10px] text-gray-400 font-bold uppercase block">Customer</span>
            <p class="font-bold text-gray-900">${AppData.customerUser.name}</p>
            <p class="text-gray-500">${AppData.customerUser.phone}</p>
          </div>
        </div>

        <table class="w-full my-3">
          <tr class="border-b text-[10px] text-gray-400 font-bold">
            <th class="text-left py-1">ITEM</th>
            <th class="text-center py-1">QTY</th>
            <th class="text-right py-1">TOTAL</th>
          </tr>
          ${inv.items.map(it => `
            <tr class="border-b border-gray-50 text-[11px]">
              <td class="py-1.5 font-medium">${it.name}</td>
              <td class="py-1.5 text-center">${it.qty}</td>
              <td class="py-1.5 text-right font-bold">₹${it.amount.toLocaleString('en-IN')}</td>
            </tr>
          `).join('')}
        </table>

        <div class="space-y-1 text-[11px] pt-1">
          <div class="flex justify-between text-gray-500"><span>Subtotal</span><span>₹${inv.subtotal.toLocaleString('en-IN')}</span></div>
          <div class="flex justify-between text-gray-500"><span>GST Tax</span><span>₹${inv.taxGst.toLocaleString('en-IN')}</span></div>
          <div class="flex justify-between font-extrabold text-sm text-brand-purple-dark pt-1.5 border-t border-dashed">
            <span>Grand Total Paid</span>
            <span>₹${inv.totalAmount.toLocaleString('en-IN')}</span>
          </div>
        </div>

        <button onclick="App.showToast('Downloading Invoice ${inv.invoiceNo} PDF... 📄')" class="w-full bg-brand-purple-dark text-white font-bold text-xs py-3 rounded-xl shadow mt-4">
          <i class="fa-solid fa-download"></i> Download PDF Invoice
        </button>
      </div>
    `;

    this.openModal('invoiceModal');
  },

  renderCustomerNotifications() {
    this.renderNotifications('customer');
  },

  renderPass() {
    const pass = AppData.pass;
    const container = document.getElementById('passCardContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="bg-white rounded-3xl p-5 border border-purple-100 card-shadow text-xs space-y-4">
        <div class="flex items-center justify-between border-b border-gray-100 pb-3">
          <div>
            <span class="text-[10px] font-extrabold uppercase tracking-widest text-brand-purple">OFFICIAL VISITOR PASS</span>
            <h3 class="font-bold text-sm text-gray-900">Didaar Exhibition Pass</h3>
          </div>
          <span class="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2.5 py-1 rounded-full">
            <i class="fa-solid fa-circle-check"></i> VERIFIED
          </span>
        </div>

        <div class="flex flex-col items-center justify-center py-2 bg-purple-50/50 rounded-2xl border border-purple-100">
          <img src="${pass.qrCodeImage}" alt="Pass QR" class="w-36 h-36 bg-white p-2 rounded-xl shadow-sm">
          <p class="font-mono text-xs font-bold text-brand-purple-dark mt-2">${pass.passId}</p>
          <p class="text-[10px] text-gray-400">Scan at entrance terminal</p>
        </div>

        <div class="grid grid-cols-2 gap-2.5">
          <div class="bg-gray-50 p-2.5 rounded-xl">
            <span class="text-[10px] text-gray-400 block font-medium">Visitor</span>
            <span class="font-bold text-gray-800">${pass.visitorName}</span>
          </div>
          <div class="bg-gray-50 p-2.5 rounded-xl">
            <span class="text-[10px] text-gray-400 block font-medium">Mobile Number</span>
            <span class="font-bold text-gray-800">${pass.phone}</span>
          </div>
          <div class="col-span-2 bg-gray-50 p-2.5 rounded-xl">
            <span class="text-[10px] text-gray-400 block font-medium">Exhibition Venue</span>
            <span class="font-bold text-gray-800">${pass.exhibitionName}</span>
            <span class="text-[10px] text-gray-500 block">${pass.venue}</span>
          </div>
        </div>

        <div class="flex items-center justify-between bg-emerald-50 border border-emerald-200 rounded-2xl p-3 text-emerald-900">
          <div class="flex items-center gap-2">
            <i class="fa-brands fa-whatsapp text-emerald-600 text-lg"></i>
            <span class="font-bold text-[11px]">Delivered to WhatsApp</span>
          </div>
          <button onclick="App.showToast('Pass resent to your WhatsApp! 📲')" class="text-[11px] font-bold underline text-emerald-700">Resend</button>
        </div>
      </div>
    `;
  },

  // ================= 2. STALL OWNER RENDERERS (10 Staff, 10 Products, 10 Bills) =================
  renderOwnerDashboard() {
    const owner = AppData.stallOwnerUser;
    const container = document.getElementById('ownerDashboardContent');
    if (!container) return;

    container.innerHTML = `
      <div class="space-y-4">
        <div class="bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 rounded-3xl p-4 text-white shadow-lg relative overflow-hidden">
          <div class="flex items-start justify-between relative z-10">
            <div>
              <span class="bg-emerald-500 text-white text-[9px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider inline-flex items-center gap-1">
                <i class="fa-solid fa-circle-check"></i> ${owner.application.status} by Admin
              </span>
              <h2 class="text-base font-extrabold mt-1.5">${owner.brandName}</h2>
              <p class="text-xs text-purple-200">${owner.stallNumber} • ${owner.hall}</p>
            </div>
            <div class="text-right">
              <span class="text-[10px] text-pink-200 block">Exhibition</span>
              <span class="font-bold text-xs text-white">Didaar Expo 2026</span>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div class="bg-white p-3.5 rounded-2xl border border-purple-50 card-shadow">
            <span class="text-[10px] font-bold text-gray-400 uppercase">Today's Sales</span>
            <h3 class="text-lg font-black text-gray-900 mt-1">₹1,47,940</h3>
            <p class="text-[10px] text-emerald-600 font-semibold mt-0.5"><i class="fa-solid fa-arrow-trend-up"></i> 10 Bills recorded</p>
          </div>

          <div class="bg-white p-3.5 rounded-2xl border border-purple-50 card-shadow">
            <span class="text-[10px] font-bold text-gray-400 uppercase">Staff Team</span>
            <h3 class="text-lg font-black text-gray-900 mt-1">10 Staff</h3>
            <p class="text-[10px] text-brand-purple font-semibold mt-0.5">8 Active On-Duty</p>
          </div>
        </div>

        <div class="bg-white rounded-2xl p-3.5 border border-purple-100 card-shadow flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-purple-50 text-brand-purple-dark flex items-center justify-center text-base">
              <i class="fa-solid fa-door-open"></i>
            </div>
            <div>
              <span class="text-[10px] font-bold text-gray-400 uppercase block">Stall Exit Clearance</span>
              <h4 class="font-bold text-xs text-emerald-600 flex items-center gap-1">
                <i class="fa-solid fa-circle-check"></i> ${owner.payment.exitStatus}
              </h4>
            </div>
          </div>
          <button onclick="App.openModal('exitPassModal')" class="bg-purple-100 text-brand-purple-dark text-xs font-bold px-3 py-1.5 rounded-xl">
            Exit QR
          </button>
        </div>

        <div>
          <div class="flex items-center justify-between mb-2.5">
            <h3 class="font-bold text-xs text-gray-900">Live Bills Generated by Staff (10)</h3>
            <button onclick="App.switchScreen('owner-sales')" class="text-[11px] font-bold text-brand-purple">View All</button>
          </div>
          <div class="space-y-2.5">
            ${owner.bills.slice(0, 4).map(b => `
              <div class="bg-white p-3 rounded-2xl border border-gray-100 soft-shadow flex items-center justify-between">
                <div>
                  <div class="flex items-center gap-2">
                    <span class="font-mono text-[11px] font-bold text-brand-purple-dark">${b.billNo}</span>
                    <span class="text-[9px] bg-purple-50 text-brand-purple font-semibold px-2 py-0.5 rounded-md">By ${b.billedBy}</span>
                  </div>
                  <p class="text-xs font-bold text-gray-800 mt-1">${b.item}</p>
                  <p class="text-[10px] text-gray-400">${b.customerName} • ${b.paymentMode}</p>
                </div>
                <div class="text-right">
                  <span class="font-extrabold text-xs text-gray-900">₹${b.total.toLocaleString('en-IN')}</span>
                  <span class="block text-[9px] text-emerald-600 font-bold">PAID</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  },

  renderOwnerInventory() {
    const list = AppData.stallOwnerUser.inventory;
    const container = document.getElementById('ownerInventoryList');
    if (!container) return;

    container.innerHTML = list.map(item => `
      <div class="bg-white rounded-2xl p-3.5 border border-gray-100 soft-shadow mb-3 space-y-2.5">
        <div class="flex gap-3">
          <img src="${item.image}" alt="${item.name}" class="w-16 h-16 rounded-xl object-cover border border-purple-50 shrink-0">
          <div class="flex-1 min-w-0">
            <div class="flex items-center justify-between">
              <span class="text-[10px] font-bold text-brand-purple uppercase">${item.category}</span>
              <span class="text-xs font-extrabold text-brand-purple-dark">₹${item.price.toLocaleString('en-IN')}</span>
            </div>
            <h4 class="font-bold text-xs text-gray-900 truncate mt-0.5">${item.name}</h4>
            <p class="text-[10px] text-gray-500 line-clamp-1">${item.description}</p>
          </div>
        </div>

        <div class="bg-purple-50/60 p-2.5 rounded-xl text-[11px] grid grid-cols-4 gap-1 text-center border border-purple-100/60">
          <div><span class="text-[9px] text-gray-400 block font-medium">Master</span><span class="font-bold text-gray-800">${item.masterStock}</span></div>
          <div><span class="text-[9px] text-gray-400 block font-medium">Expo Alloc</span><span class="font-bold text-brand-purple-dark">${item.allocatedExpo}</span></div>
          <div><span class="text-[9px] text-gray-400 block font-medium">Sold</span><span class="font-bold text-rose-600">${item.sold}</span></div>
          <div><span class="text-[9px] text-gray-400 block font-medium">Available</span><span class="font-bold text-emerald-600">${item.available}</span></div>
        </div>

        <div class="flex items-center justify-between pt-1 text-[10px]">
          <span class="text-gray-500">
            Staff In-Hand: <strong>Nilesh (${item.assignedStaff["Nilesh Patel"] || 0})</strong>, <strong>Kavita (${item.assignedStaff["Kavita Soni"] || 0})</strong>
          </span>
          <button onclick="App.openStockAllocateModal('${item.id}')" class="bg-purple-100 text-brand-purple-dark font-bold px-2.5 py-1 rounded-lg hover:bg-purple-200">
            Allocate Stock
          </button>
        </div>
      </div>
    `).join('');
  },

  openStockAllocateModal(itemId) {
    const item = AppData.stallOwnerUser.inventory.find(i => i.id === itemId) || AppData.stallOwnerUser.inventory[0];
    const modalBody = document.getElementById('productModalBody');
    if (!modalBody) return;

    modalBody.innerHTML = `
      <div class="space-y-4 text-xs">
        <div class="flex items-center justify-between border-b pb-3">
          <div>
            <h3 class="font-bold text-sm text-gray-900">Allocate Stock to Exhibition & Staff</h3>
            <p class="text-[11px] text-brand-purple font-semibold">${item.name}</p>
          </div>
          <button onclick="App.closeModal('productModal')" class="text-gray-400"><i class="fa-solid fa-xmark text-base"></i></button>
        </div>

        <div class="bg-gray-50 p-3 rounded-2xl flex items-center justify-between">
          <div><span class="text-[10px] text-gray-400 block">Total Master Stock</span><span class="font-extrabold text-sm text-gray-900">${item.masterStock} Units</span></div>
          <div class="text-right"><span class="text-[10px] text-gray-400 block">Current Available</span><span class="font-extrabold text-sm text-emerald-600">${item.available} Units</span></div>
        </div>

        <div class="space-y-3">
          <div>
            <label class="block font-bold text-gray-700 mb-1 text-[11px]">1. Allocate to Exhibition</label>
            <select class="w-full bg-gray-50 p-2.5 rounded-xl border border-gray-200 font-medium">
              <option>Didaar Grand Festive Expo 2026 (Live)</option>
              <option>Royal Heritage Bridal Fair - Mumbai</option>
            </select>
          </div>

          <div>
            <label class="block font-bold text-gray-700 mb-1 text-[11px]">2. Assign to Staff Members (In-Hand Units)</label>
            <div class="grid grid-cols-2 gap-2">
              <div class="bg-purple-50/50 p-2.5 rounded-xl border border-purple-100">
                <span class="font-bold block text-gray-800">Nilesh Patel</span>
                <input type="number" value="${item.assignedStaff["Nilesh Patel"] || 4}" class="w-full bg-white mt-1 p-1.5 rounded-lg border text-center font-bold">
              </div>
              <div class="bg-purple-50/50 p-2.5 rounded-xl border border-purple-100">
                <span class="font-bold block text-gray-800">Kavita Soni</span>
                <input type="number" value="${item.assignedStaff["Kavita Soni"] || 4}" class="w-full bg-white mt-1 p-1.5 rounded-lg border text-center font-bold">
              </div>
            </div>
          </div>
        </div>

        <button onclick="App.closeModal('productModal'); App.showToast('Stock allocation saved successfully! 📦');" class="w-full bg-brand-purple-dark text-white font-bold py-3 rounded-xl shadow mt-2">
          Save Stock Allocation
        </button>
      </div>
    `;

    this.openModal('productModal');
  },

  renderOwnerStaff() {
    const staffList = AppData.stallOwnerUser.staff;
    const container = document.getElementById('ownerStaffList');
    if (!container) return;

    container.innerHTML = staffList.map(s => `
      <div class="bg-white rounded-2xl p-3.5 border border-gray-100 soft-shadow mb-3 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <img src="${s.avatar}" class="w-12 h-12 rounded-xl object-cover border border-purple-100">
          <div>
            <div class="flex items-center gap-2">
              <h4 class="font-bold text-xs text-gray-900">${s.name}</h4>
              <span class="text-[9px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-md">${s.status}</span>
            </div>
            <p class="text-[11px] text-brand-purple font-medium">${s.role}</p>
            <p class="text-[10px] text-gray-400 mt-0.5"><i class="fa-solid fa-location-dot text-[9px]"></i> ${s.assignedExhibition}</p>
          </div>
        </div>

        <div class="text-right">
          <span class="text-[10px] text-gray-400 block font-medium">Sales</span>
          <span class="font-extrabold text-xs text-gray-900">₹${s.todaySales.toLocaleString('en-IN')}</span>
          <button onclick="App.showToast('Credentials resent to ${s.name} via WhatsApp/SMS 📲')" class="block text-[9px] text-brand-purple font-bold mt-1 hover:underline">
            Resend Pass
          </button>
        </div>
      </div>
    `).join('');
  },

  renderOwnerBills() {
    const bills = AppData.stallOwnerUser.bills;
    const container = document.getElementById('ownerBillsContainer');
    if (!container) return;

    container.innerHTML = bills.map(b => `
      <div class="bg-white rounded-2xl p-3.5 border border-gray-100 soft-shadow mb-3">
        <div class="flex items-center justify-between border-b pb-2 mb-2">
          <div>
            <span class="font-mono text-xs font-bold text-brand-purple-dark">${b.billNo}</span>
            <p class="text-[10px] text-gray-400">${b.date}</p>
          </div>
          <span class="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full">
            PAID (${b.paymentMode})
          </span>
        </div>

        <div class="flex items-center justify-between text-xs">
          <div>
            <h4 class="font-bold text-gray-900">${b.item}</h4>
            <p class="text-[11px] text-gray-500">Customer: <strong>${b.customerName}</strong> (${b.customerPhone})</p>
            <p class="text-[10px] text-brand-purple font-medium mt-0.5"><i class="fa-solid fa-user-check"></i> Billed by: ${b.billedBy}</p>
          </div>
          <div class="text-right">
            <span class="font-extrabold text-sm text-gray-900">₹${b.total.toLocaleString('en-IN')}</span>
          </div>
        </div>
      </div>
    `).join('');
  },

  renderOwnerProfile() {
    const owner = AppData.stallOwnerUser;
    const brandName = document.getElementById('ownerBrandName');
    const stallTag = document.getElementById('ownerStallTag');
    if (brandName) brandName.textContent = owner.brandName;
    if (stallTag) stallTag.textContent = `${owner.stallNumber} • ${owner.hall}`;
  },

  renderFestivalPostPreview() {
    const fp = AppData.festivalPost;
    const canvas = document.getElementById('festivalPosterCanvas');
    if (!canvas) return;

    canvas.style = "background: linear-gradient(135deg, #724C99 0%, #4A2E68 60%, #E58797 100%);";
    canvas.innerHTML = `
      <div class="p-5 flex flex-col justify-between h-full text-white relative z-10">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center font-bold text-sm">👑</div>
            <div>
              <h4 class="font-extrabold text-xs tracking-wider uppercase">${fp.brandName}</h4>
              <span class="text-[9px] text-pink-200">Official Exhibition Pavilion</span>
            </div>
          </div>
          <span class="bg-brand-pink text-purple-950 font-extrabold text-[10px] px-2.5 py-1 rounded-full shadow">DIDAAR 2026</span>
        </div>

        <div class="text-center my-auto py-2">
          <span class="text-[10px] tracking-widest uppercase font-bold text-pink-200 bg-white/10 px-3 py-1 rounded-full inline-block mb-2">✨ SPECIAL INVITATION ✨</span>
          <h2 class="text-lg font-black leading-tight drop-shadow-md">${fp.title}</h2>
          <p class="text-xs text-pink-100 font-medium mt-1">${fp.tagline}</p>
        </div>

        <div class="bg-black/30 backdrop-blur-md p-3 rounded-2xl border border-white/20 text-center space-y-1">
          <div class="font-extrabold text-sm text-yellow-300 tracking-wide">📍 ${fp.stallTag}</div>
          <div class="text-[10px] text-gray-200">${fp.dates} • ${fp.venue}</div>
        </div>
      </div>
    `;
  },

  exportFestivalPoster() {
    this.showToast("Exporting PNG festival post for Instagram & WhatsApp! 🎨");
  },

  // ================= 3. STALL OWNER STAFF MEMBER RENDERERS (10 In-Hand Products, 10 Sales) =================
  renderStaffPOS() {
    const container = document.getElementById('staffPosProductList');
    if (!container) return;

    container.innerHTML = AppData.staffUser.allocatedStock.map(p => {
      const currentQty = AppData.posCart.selectedItems[p.id] || 0;
      return `
        <div class="bg-white rounded-2xl p-3 border border-gray-100 soft-shadow flex items-center justify-between gap-3 mb-2.5">
          <img src="${p.image}" class="w-14 h-14 rounded-xl object-cover border border-purple-50 shrink-0">
          <div class="flex-1 min-w-0">
            <div class="flex items-center justify-between">
              <span class="text-[9px] font-bold text-brand-purple uppercase">${p.category}</span>
              <span class="text-[10px] font-bold ${p.inHandQty > 0 ? 'text-emerald-600 bg-emerald-50' : 'text-rose-600 bg-rose-50'} px-2 py-0.5 rounded-full">
                ${p.inHandQty} In-Hand
              </span>
            </div>
            <h4 class="font-bold text-xs text-gray-900 truncate mt-0.5">${p.name}</h4>
            <span class="font-extrabold text-xs text-brand-purple-dark">₹${p.price.toLocaleString('en-IN')}</span>
          </div>

          <div class="flex items-center gap-2 bg-purple-50 p-1 rounded-xl shrink-0">
            <button onclick="App.updatePosCartQty('${p.id}', -1)" class="w-7 h-7 rounded-lg bg-white text-gray-700 font-bold text-xs flex items-center justify-center shadow-sm">-</button>
            <span class="font-extrabold text-xs text-brand-purple-dark w-4 text-center">${currentQty}</span>
            <button onclick="App.updatePosCartQty('${p.id}', 1)" class="w-7 h-7 rounded-lg bg-brand-purple-dark text-white font-bold text-xs flex items-center justify-center shadow-sm">+</button>
          </div>
        </div>
      `;
    }).join('');

    this.updatePosCartSummary();
  },

  updatePosCartQty(prodId, delta) {
    const current = AppData.posCart.selectedItems[prodId] || 0;
    const next = current + delta;
    if (next <= 0) delete AppData.posCart.selectedItems[prodId];
    else AppData.posCart.selectedItems[prodId] = next;
    this.renderStaffPOS();
  },

  updatePosCartSummary() {
    let subtotal = 0;
    let count = 0;
    for (const [pId, qty] of Object.entries(AppData.posCart.selectedItems)) {
      const prod = AppData.staffUser.allocatedStock.find(p => p.id === pId);
      if (prod) { subtotal += prod.price * qty; count += qty; }
    }
    const gst = Math.round(subtotal * 0.03);
    const grand = subtotal + gst;

    const totEl = document.getElementById('posGrandTotal');
    const cntEl = document.getElementById('posCartItemsCount');
    const btn = document.getElementById('posSubmitBtn');

    if (totEl) totEl.textContent = `₹${grand.toLocaleString('en-IN')}`;
    if (cntEl) cntEl.textContent = `${count} item(s) selected`;
    if (btn) btn.disabled = count === 0;
  },

  generateCustomerBill() {
    this.showToast("Bill generated and sent to customer via WhatsApp! 📲🎉");
    AppData.posCart.selectedItems = {};
    this.renderStaffPOS();
  },

  renderStaffStock() {
    const container = document.getElementById('staffStockList');
    if (!container) return;

    container.innerHTML = AppData.staffUser.allocatedStock.map(item => `
      <div class="bg-white rounded-2xl p-3.5 border border-gray-100 soft-shadow mb-3 space-y-2">
        <div class="flex gap-3">
          <img src="${item.image}" alt="${item.name}" class="w-14 h-14 rounded-xl object-cover border border-purple-50 shrink-0">
          <div class="flex-1 min-w-0">
            <span class="text-[9px] font-bold text-brand-purple uppercase">${item.category}</span>
            <h4 class="font-bold text-xs text-gray-900 truncate mt-0.5">${item.name}</h4>
            <span class="font-extrabold text-xs text-brand-purple-dark">₹${item.price.toLocaleString('en-IN')}</span>
          </div>
        </div>
        <div class="bg-purple-50/60 p-2.5 rounded-xl text-[11px] grid grid-cols-3 gap-1 text-center border border-purple-100/60">
          <div><span class="text-[9px] text-gray-400 block font-medium">Allocated</span><span class="font-bold text-gray-800">${item.allocatedQty}</span></div>
          <div><span class="text-[9px] text-gray-400 block font-medium">Sold</span><span class="font-bold text-rose-600">${item.soldQty}</span></div>
          <div><span class="text-[9px] text-gray-400 block font-medium">In-Hand</span><span class="font-bold text-emerald-600">${item.inHandQty}</span></div>
        </div>
      </div>
    `).join('');
  },

  renderStaffSales() {
    const container = document.getElementById('staffSalesList');
    if (!container) return;

    container.innerHTML = AppData.staffUser.salesHistory.map(b => `
      <div class="bg-white rounded-2xl p-3.5 border border-gray-100 soft-shadow mb-3">
        <div class="flex items-center justify-between border-b pb-2 mb-2">
          <div><span class="font-mono text-xs font-bold text-brand-purple-dark">${b.billNo}</span><p class="text-[10px] text-gray-400">${b.date}</p></div>
          <span class="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full">PAID (${b.paymentMode.split(' ')[0]})</span>
        </div>
        <div class="flex items-center justify-between text-xs">
          <div><h4 class="font-bold text-gray-900">${b.items.map(it => it.name).join(', ')}</h4><p class="text-[11px] text-gray-500">Customer: ${b.customerName} (${b.customerPhone})</p></div>
          <span class="font-extrabold text-sm text-gray-900">₹${b.totalAmount.toLocaleString('en-IN')}</span>
        </div>
      </div>
    `).join('');
  },

  renderStaffExhibition() {
    const s = AppData.staffUser;
    const nameEl = document.getElementById('staffExpoName');
    const venueEl = document.getElementById('staffExpoVenue');
    if (nameEl) nameEl.textContent = s.assignedExhibition;
    if (venueEl) venueEl.textContent = `${s.venue} • ${s.stallNumber}`;
  },

  renderStaffProfile() {
    const s = AppData.staffUser;
    const name = document.getElementById('staffProfileName');
    if (name) name.textContent = s.name;
  },

  // ================= 4. ADMIN STAFF MEMBER RENDERERS (10 Visitors, 10 Stalls) =================
  renderAdminVisitors() {
    const container = document.getElementById('adminVisitorListContainer');
    if (!container) return;

    container.innerHTML = AppData.adminStaffUser.registeredVisitors.map(v => `
      <div class="bg-white rounded-2xl p-3.5 border border-gray-100 soft-shadow mb-2.5 flex items-center justify-between text-xs">
        <div>
          <div class="flex items-center gap-2">
            <span class="font-mono text-[10px] font-bold text-brand-purple-dark">${v.passId}</span>
            <span class="text-[9px] ${v.category === 'VIP Visitor' ? 'bg-purple-100 text-brand-purple-dark' : 'bg-gray-100 text-gray-700'} font-bold px-2 py-0.5 rounded-md">${v.category}</span>
          </div>
          <h4 class="font-bold text-gray-900 mt-1">${v.name} (${v.guestsCount} guests)</h4>
          <p class="text-[10px] text-gray-400"><i class="fa-solid fa-phone text-[9px]"></i> ${v.phone} • ${v.entryTime}</p>
        </div>
        <button onclick="App.showToast('Pass ${v.passId} resent via WhatsApp 📲')" class="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center hover:bg-emerald-100">
          <i class="fa-brands fa-whatsapp text-sm"></i>
        </button>
      </div>
    `).join('');
  },

  renderAdminStalls() {
    const container = document.getElementById('adminStallListContainer');
    if (!container) return;

    container.innerHTML = AppData.adminStaffUser.exhibitionStalls.map(s => `
      <div class="bg-white rounded-2xl p-3.5 border border-gray-100 soft-shadow mb-3 space-y-2 text-xs">
        <div class="flex items-start justify-between">
          <div>
            <span class="bg-purple-100 text-brand-purple-dark font-bold px-2 py-0.5 rounded">${s.stallNumber}</span>
            <h4 class="font-bold text-gray-900 mt-1">${s.stallName}</h4>
            <p class="text-gray-500">${s.category} • ${s.hall}</p>
          </div>
          <span class="text-[10px] font-extrabold px-2.5 py-1 rounded-full ${s.paymentStatus === 'Payment Completed' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-900'}">
            ${s.paymentStatus === 'Payment Completed' ? '✓ Dues Cleared' : '⚠️ Balance Pending'}
          </span>
        </div>
        <div class="bg-gray-50 p-2.5 rounded-xl flex justify-between">
          <span>Owner: <strong>${s.ownerName}</strong> (${s.ownerPhone})</span>
          <span class="text-emerald-700 font-bold">✓ Verified</span>
        </div>
        <button onclick="App.scanStallExitQR('${s.stallNumber}')" class="w-full bg-purple-50 text-brand-purple-dark font-bold py-1.5 rounded-xl hover:bg-purple-100">
          Verify Exit QR (${s.stallNumber})
        </button>
      </div>
    `).join('');
  },

  searchExistingCustomer(q) {
    const res = document.getElementById('adminCustSearchResult');
    if (!res) return;
    if (q.length > 2) {
      res.classList.remove('hidden');
      res.innerHTML = `<div class="bg-emerald-50 text-emerald-900 p-2.5 rounded-xl text-[11px]"><i class="fa-solid fa-circle-check text-emerald-600"></i> No duplicate active pass found for "${q}". Proceed with registration.</div>`;
    } else {
      res.classList.add('hidden');
    }
  },

  registerVisitorEntry() {
    const name = document.getElementById('regVisitorName').value.trim();
    const phone = document.getElementById('regVisitorPhone').value.trim();
    if (!name || !phone) { this.showToast("Please enter visitor name & mobile number"); return; }
    
    AppData.adminStaffUser.registeredVisitors.unshift({
      passId: `DX-2026-GEN-${Math.floor(1000 + Math.random() * 9000)}`,
      name: name,
      phone: phone,
      city: "Ahmedabad",
      category: "General Entry",
      guestsCount: 1,
      entryTime: "Just Now",
      registeredBy: "Rajesh Varma"
    });

    document.getElementById('regVisitorName').value = "";
    document.getElementById('regVisitorPhone').value = "";
    this.renderAdminVisitors();
    this.showToast("Visitor entry recorded & Pass sent via WhatsApp! 📲🎉");
  },

  scanStallExitQR(stallNo) {
    const s = AppData.adminStaffUser.exhibitionStalls.find(x => x.stallNumber === stallNo) || AppData.adminStaffUser.exhibitionStalls[0];
    if (s.paymentStatus === "Payment Completed") {
      this.showToast(`✓ Payment Cleared! Gate 3 Exit Authorized for ${s.stallName}. 🚪✅`);
    } else {
      alert(`⚠️ EXIT BLOCKED: ${s.stallName} has remaining dues pending. Redirect stall owner to Admin Accounts Desk!`);
    }
  },

  renderAdminProfile() {
    const a = AppData.adminStaffUser;
    const nameEl = document.getElementById('adminProfileName');
    if (nameEl) nameEl.textContent = a.name;
  },

  // ================= 5. SUPER ADMIN WEB PANEL RENDERERS =================
  switchAdminWebSection(sectionId) {
    this.currentAdminSection = sectionId;

    document.querySelectorAll('.admin-web-section').forEach(sec => {
      sec.classList.remove('active');
    });

    const target = document.getElementById(`web-sec-${sectionId}`);
    if (target) target.classList.add('active');

    document.querySelectorAll('.admin-nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.dataset.section === sectionId) link.classList.add('active');
    });
  },

  renderAdminWebPanel() {
    const exTable = document.getElementById('webExhibitionsTableBody');
    if (exTable) {
      exTable.innerHTML = AppData.exhibitions.map(ex => `
        <tr>
          <td><div class="font-bold text-gray-900">${ex.name}</div><div class="text-xs text-gray-500">${ex.venue}</div></td>
          <td><span class="bg-purple-100 text-brand-purple-dark text-xs font-bold px-2.5 py-1 rounded-full">${ex.city}</span></td>
          <td>${ex.dates}</td>
          <td><strong>${ex.occupiedStalls} / ${ex.totalStalls}</strong> Stalls</td>
          <td><span class="text-xs font-extrabold px-2.5 py-1 rounded-full ${ex.status === 'Ongoing / Live' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'}">● ${ex.status}</span></td>
          <td><button onclick="App.showToast('Editing ${ex.name}')" class="text-brand-purple font-bold text-xs">Edit</button></td>
        </tr>
      `).join('');
    }

    const appTable = document.getElementById('webApplicationsTableBody');
    if (appTable) {
      appTable.innerHTML = AppData.stalls.map((s, idx) => `
        <tr>
          <td><span class="font-mono text-xs font-bold text-brand-purple-dark">APP-2026-DX-0${idx+10}</span></td>
          <td><div class="font-bold text-gray-900">${s.name}</div><div class="text-xs text-gray-500">${s.categoryLabel}</div></td>
          <td>${s.owner} (${s.contact})</td>
          <td><span class="font-bold text-brand-purple-dark bg-purple-50 px-2 py-0.5 rounded">${s.stallNumber}</span></td>
          <td><span class="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-0.5 rounded-full">Approved</span></td>
          <td><span class="text-emerald-700 font-bold text-xs">✓ Onboarded</span></td>
        </tr>
      `).join('');
    }

    const stallTable = document.getElementById('webStallsTableBody');
    if (stallTable) {
      stallTable.innerHTML = AppData.stalls.map(s => `
        <tr>
          <td><strong>${s.stallNumber}</strong></td>
          <td>${s.locationInHall}</td>
          <td>${s.categoryLabel}</td>
          <td>Corner 6x3m</td>
          <td><strong class="text-brand-purple-dark">₹80,000</strong></td>
          <td><span class="bg-purple-100 text-brand-purple-dark text-xs font-bold px-2.5 py-0.5 rounded-full">Occupied (${s.name})</span></td>
        </tr>
      `).join('');
    }

    const payTable = document.getElementById('webPaymentsTableBody');
    if (payTable) {
      payTable.innerHTML = AppData.stalls.map(s => `
        <tr>
          <td><div class="font-bold">${s.name}</div><div class="text-xs text-brand-purple">${s.stallNumber}</div></td>
          <td>₹80,000</td>
          <td><span class="text-emerald-700 font-bold">₹50,000</span></td>
          <td><span class="text-amber-700 font-bold">₹30,000</span></td>
          <td><span class="bg-amber-100 text-amber-900 text-xs font-bold px-2 py-0.5 rounded-full">Partially Paid</span></td>
          <td><span class="text-emerald-700 font-bold text-xs">✓ Approved</span></td>
          <td><button onclick="App.showToast('Full payment recorded for ${s.name}')" class="bg-brand-purple-dark text-white text-xs font-bold px-2.5 py-1 rounded-lg">Record Final Payment</button></td>
        </tr>
      `).join('');
    }

    const visTable = document.getElementById('webVisitorsTableBody');
    if (visTable) {
      visTable.innerHTML = AppData.adminStaffUser.registeredVisitors.map(v => `
        <tr>
          <td><span class="font-mono text-xs font-bold text-brand-purple-dark">${v.passId}</span></td>
          <td><div class="font-bold">${v.name}</div><div class="text-xs text-gray-400">${v.city}</div></td>
          <td>${v.phone}</td>
          <td><span class="bg-purple-100 text-brand-purple-dark text-xs font-bold px-2 py-0.5 rounded-full">${v.category}</span></td>
          <td>${v.entryTime}</td>
          <td><span class="text-emerald-700 font-bold text-xs"><i class="fa-brands fa-whatsapp"></i> Delivered</span></td>
        </tr>
      `).join('');
    }

    const staffTable = document.getElementById('webStaffTableBody');
    if (staffTable) {
      staffTable.innerHTML = AppData.stallOwnerUser.staff.map(st => `
        <tr>
          <td><span class="font-mono text-xs font-bold text-brand-purple-dark">${st.id}</span></td>
          <td><div class="font-bold">${st.name}</div><div class="text-xs text-gray-400">${st.phone}</div></td>
          <td>${st.role}</td>
          <td>${st.assignedExhibition}</td>
          <td>Stall A-12 Counter</td>
          <td><span class="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-0.5 rounded-full">${st.status}</span></td>
        </tr>
      `).join('');
    }
  },

  renderNotifications(role = this.currentRole) {
    const container = document.getElementById('notificationListContainer');
    if (!container) return;
    
    let list = [];
    if (role === 'customer') list = AppData.customerNotifications;
    else if (role === 'stall_owner') list = AppData.stallOwnerUser.notifications;
    else if (role === 'staff') list = AppData.staffUser.notifications;
    else if (role === 'admin_staff') list = AppData.adminStaffUser.notifications;

    container.innerHTML = list.map(n => `
      <div class="bg-white rounded-2xl p-3.5 border border-purple-100 soft-shadow mb-3 flex gap-3">
        <div class="w-10 h-10 rounded-xl bg-purple-50 text-brand-purple-dark flex items-center justify-center shrink-0">
          <i class="fa-solid ${n.type === 'pass' ? 'fa-ticket' : n.type === 'invoice' || n.type === 'sales' ? 'fa-receipt' : n.type === 'stock' ? 'fa-boxes-stacked' : 'fa-bell'} text-sm"></i>
        </div>
        <div class="flex-1">
          <div class="flex items-center justify-between"><h4 class="font-bold text-xs text-gray-900">${n.title}</h4><span class="text-[10px] text-gray-400">${n.time}</span></div>
          <p class="text-[11px] text-gray-600 mt-1 leading-relaxed">${n.message}</p>
        </div>
      </div>
    `).join('');
  },

  handleLogout() {
    AppData.isLoggedIn = false;
    this.switchScreen('auth');
    this.showToast("Logged out successfully");
  },

  openModal(id) { const m = document.getElementById(id); if (m) m.classList.add('active'); },
  closeModal(id) { const m = document.getElementById(id); if (m) m.classList.remove('active'); },
  showToast(msg) {
    const t = document.getElementById('appToast');
    if (!t) return;
    t.textContent = msg;
    t.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
    t.classList.add('opacity-100', 'translate-y-0');
    setTimeout(() => {
      t.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
      t.classList.remove('opacity-100', 'translate-y-0');
    }, 2800);
  },
  setupEventListeners() {}
};

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
