// Didaar Exhibition Prototype - Multi-Role & Super Admin Web Panel Engine

const AppData = {
  // Current active mode & role
  portalMode: 'mobile', // 'mobile' | 'web_admin'
  currentRole: 'customer', // 'customer' | 'stall_owner' | 'staff' | 'admin_staff'
  isLoggedIn: false,

  // ================= SUPER ADMIN WEB PANEL DATA =================
  superAdmin: {
    name: "Aditya Mehta",
    role: "Super Admin",
    designation: "Head of Operations & Technology",
    email: "admin@didaarexhibition.com",
    phone: "+91 98980 11223",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },

  // Master Exhibitions
  exhibitions: [
    {
      id: "ex-1",
      name: "Didaar Grand Festive Expo 2026",
      city: "Ahmedabad",
      dates: "28 Mar - 30 Mar 2026",
      daysLeft: "Live Now",
      status: "Ongoing / Live",
      timing: "10:30 AM - 08:30 PM",
      venue: "Grand Hall A, Riverfront Convention Centre",
      address: "Sabarmati Riverfront, Ashram Road, Ahmedabad",
      totalStalls: 140,
      occupiedStalls: 128,
      rentCollected: 8450000,
      totalSalesGMV: 14280000,
      registeredVisitorsCount: 1420,
      bannerImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
      description: "Gujarat's most anticipated luxury shopping celebration featuring over 140 curated pavilions across couture and jewellery."
    },
    {
      id: "ex-2",
      name: "Royal Heritage Bridal & Couture Fair",
      city: "Mumbai",
      dates: "12 Apr - 14 Apr 2026",
      daysLeft: "In 14 Days",
      status: "Upcoming",
      timing: "11:00 AM - 09:00 PM",
      venue: "Dome, NSCI SVP Stadium, Worli",
      address: "Worli, Mumbai, Maharashtra 400018",
      totalStalls: 185,
      occupiedStalls: 140,
      rentCollected: 9500000,
      totalSalesGMV: 0,
      registeredVisitorsCount: 380,
      bannerImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      description: "Mumbai's biggest couture rendezvous showcasing master couturiers and royal jewelers."
    },
    {
      id: "ex-3",
      name: "Didaar Art & Handloom Utsav",
      city: "Surat",
      dates: "22 Apr - 24 Apr 2026",
      daysLeft: "In 24 Days",
      status: "Upcoming",
      timing: "10:00 AM - 08:00 PM",
      venue: "Sarsana International Exhibition Center",
      address: "Khajod, Sarsana, Surat, Gujarat 395007",
      totalStalls: 95,
      occupiedStalls: 60,
      rentCollected: 3800000,
      totalSalesGMV: 0,
      registeredVisitorsCount: 120,
      bannerImage: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80",
      description: "A tribute to Indian textiles featuring authentic Banarasi, Kanjeevaram, and Patola silk weavers."
    }
  ],

  // Master Stall Applications (Review, Approval, Pricing, Onboarding Email)
  stallApplications: [
    {
      appId: "APP-2026-DX-089",
      businessName: "Zaveri Royal Heritage Jewels LLP",
      brandName: "Zaveri Royal Jewels",
      ownerName: "Vikramaditya Zaveri",
      phone: "+91 98250 11223",
      email: "vikram@zaverijewels.com",
      city: "Ahmedabad",
      category: "Jewellery & Silver",
      requestedStallType: "Corner Premium 6x3m",
      assignedStall: "Stall A-12",
      hall: "Hall A (Main Boulevard)",
      exhibitionName: "Didaar Grand Festive Expo 2026",
      status: "Approved",
      totalFee: 80000,
      advancePaid: 50000,
      remainingFee: 30000,
      paymentStatus: "Partially Paid",
      exitStatus: "Approved by Admin",
      submittedDate: "12 Feb 2026",
      tempCredentials: "TempPass@Zaveri26",
      onboardingEmailSent: true
    },
    {
      appId: "APP-2026-DX-104",
      businessName: "Gulabo Jaipur Pret LLP",
      brandName: "Gulabo Jaipur Couture",
      ownerName: "Meenakshi Rathore",
      phone: "+91 94140 88990",
      email: "meenakshi@gulabojaipur.com",
      city: "Jaipur",
      category: "Clothing",
      requestedStallType: "Standard 3x3m",
      assignedStall: "Stall B-08",
      hall: "Silk Pavilion, Hall A",
      exhibitionName: "Didaar Grand Festive Expo 2026",
      status: "Approved",
      totalFee: 65000,
      advancePaid: 30000,
      remainingFee: 35000,
      paymentStatus: "Partially Paid",
      exitStatus: "Exit Blocked",
      submittedDate: "18 Feb 2026",
      tempCredentials: "TempPass@Gulabo26",
      onboardingEmailSent: true
    },
    {
      appId: "APP-2026-DX-118",
      businessName: "Kala Niketan Silk Sarees",
      brandName: "Kala Niketan",
      ownerName: "Rajesh Singhania",
      phone: "+91 98200 44556",
      email: "rajesh@kalaniketan.com",
      city: "Surat",
      category: "Clothing",
      requestedStallType: "Corner 6x3m",
      assignedStall: "Unassigned",
      hall: "Pending Hall Allocation",
      exhibitionName: "Didaar Grand Festive Expo 2026",
      status: "Pending Review",
      totalFee: 80000,
      advancePaid: 0,
      remainingFee: 80000,
      paymentStatus: "Payment Pending",
      exitStatus: "Exit Blocked",
      submittedDate: "28 Mar 2026",
      tempCredentials: "Pending",
      onboardingEmailSent: false
    }
  ],

  // Master Stalls and Configured Pricing
  stallsInventory: [
    { stallNumber: "Stall A-12", hall: "Hall A", category: "Jewellery", type: "Corner Premium 6x3m", price: 80000, status: "Occupied", assignedTo: "Zaveri Royal Jewels" },
    { stallNumber: "Stall B-08", hall: "Hall A", category: "Clothing", type: "Standard 3x3m", price: 65000, status: "Occupied", assignedTo: "Gulabo Jaipur Couture" },
    { stallNumber: "Stall C-15", hall: "Hall B", category: "Footwear", type: "Standard 3x3m", price: 45000, status: "Occupied", assignedTo: "Mochi Heritage Juttis" },
    { stallNumber: "Stall D-04", hall: "Hall B", category: "Handicrafts", type: "Standard 3x3m", price: 45000, status: "Occupied", assignedTo: "Virasat Weaves" },
    { stallNumber: "Stall A-14", hall: "Hall A", category: "Jewellery", type: "Island Pavilion 6x6m", price: 120000, status: "Available", assignedTo: "None" },
    { stallNumber: "Stall B-10", hall: "Hall A", category: "Clothing", type: "Standard 3x3m", price: 65000, status: "Available", assignedTo: "None" }
  ],

  // Admin Staff Accounts
  adminStaffList: [
    {
      staffId: "ADM-ST-04",
      name: "Rajesh Varma",
      role: "Gate Security & Entry Coordinator",
      phone: "+91 98220 33445",
      email: "rajesh.varma@didaarexhibition.com",
      assignedExhibition: "Didaar Grand Festive Expo 2026",
      assignedGates: "Gate 1 (Visitor Entry) & Gate 3 (Stall Exit)",
      status: "Active"
    },
    {
      staffId: "ADM-ST-02",
      name: "Pooja Desai",
      role: "Visitor Registration & Helpdesk",
      phone: "+91 98790 55667",
      email: "pooja.desai@didaarexhibition.com",
      assignedExhibition: "Didaar Grand Festive Expo 2026",
      assignedGates: "Gate 1 (Registration Counters)",
      status: "Active"
    }
  ],

  // Audit Log Records
  auditLogs: [
    { timestamp: "29 Mar 2026, 11:25 AM", user: "Super Admin (Aditya)", action: "Approved Stall A-12 allocation for Zaveri Royal Jewels" },
    { timestamp: "29 Mar 2026, 10:45 AM", user: "Admin Staff (Rajesh)", action: "Registered visitor Priya Sharma (DX-2026-VIP-8841)" },
    { timestamp: "29 Mar 2026, 09:30 AM", user: "Super Admin (Aditya)", action: "Created new Admin Staff account for Pooja Desai" },
    { timestamp: "28 Mar 2026, 04:15 PM", user: "Staff (Nilesh Patel)", action: "Generated Invoice #DID-2026-8891 for ₹19,055" },
    { timestamp: "28 Mar 2026, 02:00 PM", user: "Super Admin (Aditya)", action: "Recorded advance payment of ₹50,000 for Stall A-12" }
  ],

  // ================= 1. CUSTOMER PROFILE DATA =================
  customerUser: {
    name: "Priya Sharma",
    phone: "+91 98765 43210",
    email: "priya.sharma@example.com",
    city: "Ahmedabad"
  },

  // ================= 2. STALL OWNER DATA =================
  stallOwnerUser: {
    name: "Vikramaditya Zaveri",
    brandName: "Zaveri Royal Jewels",
    phone: "+91 98250 11223",
    stallNumber: "Stall A-12",
    hall: "Hall A (Main Boulevard)",
    application: { status: "Approved", appId: "APP-2026-DX-089" },
    payment: { exitStatus: "Approved by Admin" },
    staff: [
      { name: "Nilesh Patel", role: "Billing & Cashier", phone: "+91 98790 12345", status: "Active", todaySales: 38400 }
    ],
    inventory: [
      { id: "p-101", name: "Regal Kundan & Emerald Choker Set", category: "Jewellery", price: 18500, masterStock: 15, available: 6, sold: 2, allocatedExpo: 8 }
    ],
    bills: [
      { billNo: "DID-2026-8891", date: "28 Mar 2026, 02:45 PM", customerName: "Priya Sharma", total: 19055, billedBy: "Nilesh Patel", paymentMode: "UPI" }
    ]
  },

  // ================= 3. STALL OWNER STAFF MEMBER DATA =================
  staffUser: {
    name: "Nilesh Patel",
    role: "Billing & Cashier Specialist",
    phone: "+91 98790 12345",
    stallName: "Zaveri Royal Jewels",
    stallNumber: "Stall A-12",
    allocatedStock: [
      { id: "p-101", name: "Regal Kundan & Emerald Choker Set", category: "Jewellery", price: 18500, allocatedQty: 4, soldQty: 2, inHandQty: 2, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=500&q=80" },
      { id: "p-102", name: "Temple Motif Antique Silver Kada", category: "Jewellery", price: 7800, allocatedQty: 5, soldQty: 3, inHandQty: 2, image: "https://images.unsplash.com/photo-1611591475102-460a7f580001?auto=format&fit=crop&w=500&q=80" }
    ],
    salesHistory: [
      { billNo: "DID-2026-8891", date: "28 Mar 2026, 02:45 PM", customerName: "Priya Sharma", customerPhone: "+91 98765 43210", items: [{ name: "Regal Kundan Set", qty: 1, rate: 18500, amount: 18500 }], totalAmount: 19055, paymentMode: "UPI / PhonePe" }
    ]
  },

  posCart: {
    customerName: "Sneha Kapadia",
    customerPhone: "+91 98980 77665",
    customerCity: "Ahmedabad",
    selectedItems: {},
    paymentMode: "UPI / PhonePe"
  },

  // ================= 4. ADMIN STAFF MEMBER DATA =================
  adminStaffUser: {
    name: "Rajesh Varma",
    role: "Chief Entry & Security Coordinator",
    staffId: "ADM-ST-04",
    phone: "+91 98220 33445",
    assignedExhibition: "Didaar Grand Festive Expo 2026",
    registeredVisitors: [
      { passId: "DX-2026-VIP-8841", name: "Priya Sharma", phone: "+91 98765 43210", category: "VIP Visitor", guestsCount: 2, entryTime: "28 Mar 2026, 10:45 AM", registeredBy: "Rajesh Varma" }
    ],
    exhibitionStalls: [
      { stallNumber: "Stall A-12", stallName: "Zaveri Royal Jewels", ownerName: "Vikramaditya Zaveri", ownerPhone: "+91 98250 11223", category: "Fine Jewellery", hall: "Hall A", paymentStatus: "Payment Completed", exitClearanceStatus: "Approved for Exit", exitPassId: "EXIT-DX-2026-A12" },
      { stallNumber: "Stall B-08", stallName: "Gulabo Jaipur Couture", ownerName: "Meenakshi Rathore", ownerPhone: "+91 94140 88990", category: "Designer Wear", hall: "Hall A", paymentStatus: "Remaining Dues Pending", exitClearanceStatus: "Exit Blocked", exitPassId: "EXIT-DX-2026-B08" }
    ]
  },

  cities: ["Ahmedabad", "Mumbai", "Surat", "Jaipur", "Delhi", "Pune"],
  currentCity: "Ahmedabad",

  categories: [
    { id: "all", name: "All", icon: "sparkles" },
    { id: "jewellery", name: "Jewellery", icon: "gem" },
    { id: "clothing", name: "Clothing", icon: "shirt" },
    { id: "footwear", name: "Footwear", icon: "footprints" },
    { id: "handicrafts", name: "Handicrafts", icon: "palette" }
  ],

  stalls: [
    { id: "stall-1", stallNumber: "Stall A-12", name: "Zaveri Royal Jewels", category: "jewellery", categoryLabel: "Jewellery & Silver", owner: "Vikramaditya Zaveri", contact: "+91 98250 11223", locationInHall: "Main Boulevard, Hall A", rating: "4.9", logo: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=200&q=80" }
  ],

  products: [
    { id: "prod-1", stallId: "stall-1", name: "Regal Kundan & Emerald Choker Set", category: "Jewellery", price: 18500, stockStatus: "In Stock", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80" }
  ],

  pass: {
    passId: "DX-2026-VIP-8841",
    visitorName: "Priya Sharma",
    phone: "+91 98765 43210",
    exhibitionName: "Didaar Grand Festive Expo 2026",
    qrCodeImage: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=DX-2026-VIP-8841-PRIYA-SHARMA-DIDAAR"
  },

  invoices: [
    { invoiceNo: "DID-2026-8891", date: "28 Mar 2026, 02:45 PM", stallName: "Zaveri Royal Jewels", stallNumber: "Stall A-12", totalAmount: 19055, items: [{ name: "Regal Kundan Set", qty: 1, rate: 18500, amount: 18500 }] }
  ],

  notifications: {
    customer: [{ id: "cn-1", title: "Exhibition Pass Ready 🎉", message: "Pass sent to WhatsApp.", time: "10m ago", type: "pass" }],
    stall_owner: [{ id: "sn-1", title: "Stall Approved 🎉", message: "Assigned Stall A-12 (Hall A).", time: "Just now", type: "approval" }],
    staff: [{ id: "stn-1", title: "Assigned Stall A-12", message: "Assigned by Vikramaditya Zaveri.", time: "09:00 AM", type: "assignment" }],
    admin_staff: [{ id: "asn-1", title: "Visitor Footfall Alert", message: "1,420 visitors registered today.", time: "5m ago", type: "pass" }]
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
  portalMode: 'mobile', // 'mobile' | 'web_admin'
  currentRole: 'customer',
  currentScreen: 'auth',
  currentAdminSection: 'admin-dash',

  init() {
    this.updateUserRole(this.currentRole);
    this.renderAdminWebPanel();
    this.renderStaffPOS();
    this.renderAdminVisitors();
    this.renderAdminStalls();
    this.switchPortal('mobile');
    this.switchScreen('auth');
  },

  // Toggle between Mobile Prototype Simulator and Super Admin Web Panel
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

  // ================= SUPER ADMIN WEB PANEL CONTROLLER =================
  switchAdminWebSection(sectionId) {
    this.currentAdminSection = sectionId;

    document.querySelectorAll('.admin-web-section').forEach(sec => {
      sec.classList.remove('active');
    });

    const target = document.getElementById(`web-sec-${sectionId}`);
    if (target) {
      target.classList.add('active');
    }

    document.querySelectorAll('.admin-nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.dataset.section === sectionId) {
        link.classList.add('active');
      }
    });
  },

  renderAdminWebPanel() {
    this.renderWebDashboard();
    this.renderWebExhibitions();
    this.renderWebStallApplications();
    this.renderWebStallsPricing();
    this.renderWebPayments();
    this.renderWebStaffManagement();
    this.renderWebVisitors();
    this.renderWebAuditLog();
  },

  renderWebDashboard() {
    const totalRevenue = AppData.exhibitions.reduce((acc, e) => acc + e.rentCollected, 0);
    const totalGMV = AppData.exhibitions.reduce((acc, e) => acc + e.totalSalesGMV, 0);
    const totalStalls = AppData.stallsInventory.length;
    const occupiedStalls = AppData.stallsInventory.filter(s => s.status === 'Occupied').length;
    const totalVisitors = AppData.adminStaffUser.registeredVisitors.length + 1416;

    const revEl = document.getElementById('webTotalRentCollected');
    const gmvEl = document.getElementById('webTotalGMVSales');
    const stallOccupancyEl = document.getElementById('webStallOccupancy');
    const visitorsEl = document.getElementById('webTotalVisitorsRegistered');

    if (revEl) revEl.textContent = `₹${(totalRevenue / 100000).toFixed(2)} Lakhs`;
    if (gmvEl) gmvEl.textContent = `₹${(totalGMV / 100000).toFixed(2)} Lakhs`;
    if (stallOccupancyEl) stallOccupancyEl.textContent = `${occupiedStalls} / ${totalStalls} Stalls Occupied`;
    if (visitorsEl) visitorsEl.textContent = `${totalVisitors} Registered Visitors`;
  },

  renderWebExhibitions() {
    const tableBody = document.getElementById('webExhibitionsTableBody');
    if (!tableBody) return;

    tableBody.innerHTML = AppData.exhibitions.map(ex => `
      <tr>
        <td>
          <div class="font-bold text-gray-900">${ex.name}</div>
          <div class="text-xs text-gray-500">${ex.venue}</div>
        </td>
        <td><span class="bg-purple-100 text-brand-purple-dark text-xs font-bold px-2.5 py-1 rounded-full">${ex.city}</span></td>
        <td>${ex.dates}</td>
        <td><strong>${ex.occupiedStalls} / ${ex.totalStalls}</strong> Stalls</td>
        <td>
          <span class="text-xs font-extrabold px-2.5 py-1 rounded-full ${ex.status === 'Ongoing / Live' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'}">
            ● ${ex.status}
          </span>
        </td>
        <td>
          <button onclick="App.showToast('Editing ${ex.name}')" class="text-brand-purple hover:underline font-bold text-xs mr-2">Edit</button>
          <button onclick="App.showToast('Exhibition status updated')" class="text-gray-500 hover:underline text-xs">Lifecycle</button>
        </td>
      </tr>
    `).join('');
  },

  renderWebStallApplications() {
    const tableBody = document.getElementById('webApplicationsTableBody');
    if (!tableBody) return;

    tableBody.innerHTML = AppData.stallApplications.map(app => `
      <tr>
        <td>
          <div class="font-mono text-xs font-bold text-brand-purple-dark">${app.appId}</div>
          <div class="text-xs text-gray-400">${app.submittedDate}</div>
        </td>
        <td>
          <div class="font-bold text-gray-900">${app.brandName}</div>
          <div class="text-xs text-gray-500">${app.businessName}</div>
        </td>
        <td>
          <div>${app.ownerName}</div>
          <div class="text-xs text-gray-400">${app.phone}</div>
        </td>
        <td>
          <span class="font-bold ${app.assignedStall !== 'Unassigned' ? 'text-brand-purple-dark bg-purple-50 px-2 py-0.5 rounded-md' : 'text-gray-400'}">
            ${app.assignedStall}
          </span>
        </td>
        <td>
          <span class="text-xs font-extrabold px-2.5 py-1 rounded-full ${app.status === 'Approved' ? 'bg-emerald-100 text-emerald-800' : app.status === 'Pending Review' ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800'}">
            ${app.status}
          </span>
        </td>
        <td>
          ${app.status === 'Pending Review' ? `
            <button onclick="App.openApproveStallModal('${app.appId}')" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-2.5 py-1 rounded-lg mr-1 shadow-sm">
              Approve & Assign
            </button>
            <button onclick="App.openRejectStallModal('${app.appId}')" class="bg-rose-50 text-rose-600 font-bold text-xs px-2.5 py-1 rounded-lg hover:bg-rose-100">
              Reject
            </button>
          ` : `
            <span class="text-xs text-emerald-700 font-bold flex items-center gap-1">
              <i class="fa-solid fa-envelope-circle-check"></i> Onboarded
            </span>
          `}
        </td>
      </tr>
    `).join('');
  },

  openApproveStallModal(appId) {
    const app = AppData.stallApplications.find(a => a.appId === appId);
    if (!app) return;

    const modalBody = document.getElementById('superAdminModalBody');
    if (!modalBody) return;

    modalBody.innerHTML = `
      <div class="space-y-4 text-xs">
        <div class="flex items-center justify-between border-b pb-3">
          <div>
            <h3 class="font-bold text-sm text-gray-900">Approve Stall Application & Assign Booth</h3>
            <p class="text-brand-purple font-semibold">${app.brandName} (${app.appId})</p>
          </div>
          <button onclick="App.closeModal('superAdminModal')" class="text-gray-400"><i class="fa-solid fa-xmark text-base"></i></button>
        </div>

        <div class="space-y-3">
          <div>
            <label class="block font-bold text-gray-700 mb-1 text-[11px]">1. Assign Stall Number for Exhibition</label>
            <select id="modalAssignStallSelect" class="w-full bg-gray-50 p-2.5 rounded-xl border border-gray-200 font-bold text-brand-purple-dark">
              <option value="Stall A-14">Stall A-14 (Hall A • Island 6x6m • ₹1,20,000)</option>
              <option value="Stall B-10">Stall B-10 (Hall A • Standard 3x3m • ₹65,000)</option>
            </select>
          </div>

          <div class="grid grid-cols-2 gap-2">
            <div>
              <label class="block font-bold text-gray-700 mb-1 text-[11px]">Total Stall Rent (₹)</label>
              <input id="modalTotalRentInput" type="number" value="80000" class="w-full bg-gray-50 p-2.5 rounded-xl border font-bold">
            </div>
            <div>
              <label class="block font-bold text-gray-700 mb-1 text-[11px]">Advance Required (₹)</label>
              <input id="modalAdvanceRentInput" type="number" value="50000" class="w-full bg-gray-50 p-2.5 rounded-xl border font-bold">
            </div>
          </div>

          <div class="bg-purple-50 p-3 rounded-2xl border border-purple-100 text-[11px] text-brand-purple-dark space-y-1">
            <strong class="block"><i class="fa-solid fa-paper-plane"></i> Automated Stall Owner Onboarding Email:</strong>
            <p>The system will auto-generate login credentials (<code>TempPass@Kala26</code>) and dispatch the application login link to <strong>${app.email}</strong>.</p>
          </div>
        </div>

        <button onclick="App.confirmStallApproval('${app.appId}')" class="w-full bg-brand-purple-dark hover:bg-purple-900 text-white font-bold py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2">
          <i class="fa-solid fa-circle-check"></i> Approve Application & Send Onboarding Email
        </button>
      </div>
    `;

    this.openModal('superAdminModal');
  },

  confirmStallApproval(appId) {
    const app = AppData.stallApplications.find(a => a.appId === appId);
    if (!app) return;

    app.status = "Approved";
    app.assignedStall = document.getElementById('modalAssignStallSelect').value;
    app.totalFee = parseInt(document.getElementById('modalTotalRentInput').value) || 80000;
    app.advancePaid = parseInt(document.getElementById('modalAdvanceRentInput').value) || 50000;
    app.remainingFee = app.totalFee - app.advancePaid;
    app.paymentStatus = "Partially Paid";
    app.onboardingEmailSent = true;

    // Log to Audit trail
    AppData.auditLogs.unshift({
      timestamp: "Just Now",
      user: "Super Admin (Aditya)",
      action: `Approved Stall Application ${appId} for ${app.brandName} (Assigned ${app.assignedStall})`
    });

    this.renderWebStallApplications();
    this.renderWebPayments();
    this.renderWebAuditLog();
    this.closeModal('superAdminModal');
    this.showToast(`Application Approved! Stall ${app.assignedStall} assigned and credentials emailed to ${app.email} 📧🎉`);
  },

  openRejectStallModal(appId) {
    const reason = prompt("Enter reason / remarks for rejecting this stall application:");
    if (reason) {
      const app = AppData.stallApplications.find(a => a.appId === appId);
      if (app) {
        app.status = "Rejected";
        this.renderWebStallApplications();
        this.showToast(`Application ${appId} marked as Rejected with remarks: "${reason}"`);
      }
    }
  },

  renderWebStallsPricing() {
    const tableBody = document.getElementById('webStallsTableBody');
    if (!tableBody) return;

    tableBody.innerHTML = AppData.stallsInventory.map(st => `
      <tr>
        <td><span class="font-bold text-gray-900">${st.stallNumber}</span></td>
        <td>${st.hall}</td>
        <td>${st.category}</td>
        <td>${st.type}</td>
        <td><span class="font-extrabold text-brand-purple-dark">₹${st.price.toLocaleString('en-IN')}</span></td>
        <td>
          <span class="text-xs font-bold px-2.5 py-1 rounded-full ${st.status === 'Occupied' ? 'bg-purple-100 text-brand-purple-dark' : 'bg-emerald-100 text-emerald-800'}">
            ${st.status} (${st.assignedTo})
          </span>
        </td>
      </tr>
    `).join('');
  },

  renderWebPayments() {
    const tableBody = document.getElementById('webPaymentsTableBody');
    if (!tableBody) return;

    tableBody.innerHTML = AppData.stallApplications.filter(a => a.status === 'Approved').map(app => `
      <tr>
        <td>
          <div class="font-bold text-gray-900">${app.brandName}</div>
          <div class="text-xs text-brand-purple font-semibold">${app.assignedStall}</div>
        </td>
        <td><strong>₹${app.totalFee.toLocaleString('en-IN')}</strong></td>
        <td><span class="text-emerald-600 font-bold">₹${app.advancePaid.toLocaleString('en-IN')}</span></td>
        <td><span class="text-amber-700 font-bold">₹${app.remainingFee.toLocaleString('en-IN')}</span></td>
        <td>
          <span class="text-xs font-extrabold px-2.5 py-1 rounded-full ${app.paymentStatus === 'Fully Paid' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-900'}">
            ${app.paymentStatus}
          </span>
        </td>
        <td>
          <span class="text-xs font-bold ${app.exitStatus === 'Approved by Admin' ? 'text-emerald-700' : 'text-rose-700'}">
            ${app.exitStatus}
          </span>
        </td>
        <td>
          ${app.remainingFee > 0 ? `
            <button onclick="App.recordFullPayment('${app.appId}')" class="bg-brand-purple-dark text-white font-bold text-xs px-2.5 py-1 rounded-lg shadow-sm hover:bg-purple-900">
              Record Full Payment
            </button>
          ` : `
            <span class="text-xs text-emerald-600 font-bold">✓ Cleared</span>
          `}
        </td>
      </tr>
    `).join('');
  },

  recordFullPayment(appId) {
    const app = AppData.stallApplications.find(a => a.appId === appId);
    if (!app) return;

    app.advancePaid = app.totalFee;
    app.remainingFee = 0;
    app.paymentStatus = "Fully Paid";
    app.exitStatus = "Approved by Admin";

    AppData.auditLogs.unshift({
      timestamp: "Just Now",
      user: "Super Admin (Aditya)",
      action: `Recorded final payment clearance for ${app.brandName} (${app.assignedStall})`
    });

    this.renderWebPayments();
    this.renderWebAuditLog();
    this.showToast(`Payment of remaining balance recorded! Stall exit pass cleared. 💳✅`);
  },

  renderWebStaffManagement() {
    const tableBody = document.getElementById('webStaffTableBody');
    if (!tableBody) return;

    tableBody.innerHTML = AppData.adminStaffList.map(st => `
      <tr>
        <td><span class="font-mono text-xs font-bold text-brand-purple-dark">${st.staffId}</span></td>
        <td><div class="font-bold text-gray-900">${st.name}</div><div class="text-xs text-gray-400">${st.phone}</div></td>
        <td>${st.role}</td>
        <td>${st.assignedExhibition}</td>
        <td>${st.assignedGates}</td>
        <td><span class="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-0.5 rounded-full">${st.status}</span></td>
      </tr>
    `).join('');
  },

  renderWebVisitors() {
    const tableBody = document.getElementById('webVisitorsTableBody');
    if (!tableBody) return;

    tableBody.innerHTML = AppData.adminStaffUser.registeredVisitors.map(v => `
      <tr>
        <td><span class="font-mono text-xs font-bold text-brand-purple-dark">${v.passId}</span></td>
        <td><div class="font-bold text-gray-900">${v.name}</div><div class="text-xs text-gray-400">${v.city}</div></td>
        <td>${v.phone}</td>
        <td><span class="bg-purple-100 text-brand-purple-dark text-xs font-bold px-2.5 py-0.5 rounded-full">${v.category}</span></td>
        <td>${v.entryTime}</td>
        <td><span class="text-emerald-700 font-bold text-xs"><i class="fa-brands fa-whatsapp text-sm"></i> Delivered</span></td>
      </tr>
    `).join('');
  },

  renderWebAuditLog() {
    const container = document.getElementById('webAuditLogContainer');
    if (!container) return;

    container.innerHTML = AppData.auditLogs.map(log => `
      <div class="flex items-start gap-3 p-3 bg-gray-50 rounded-2xl border border-gray-100 text-xs">
        <div class="w-8 h-8 rounded-xl bg-purple-100 text-brand-purple-dark flex items-center justify-center shrink-0">
          <i class="fa-solid fa-clock-rotate-left"></i>
        </div>
        <div class="flex-1">
          <p class="text-gray-900 font-semibold">${log.action}</p>
          <div class="flex items-center gap-3 text-[11px] text-gray-400 mt-0.5">
            <span><i class="fa-solid fa-user text-[10px]"></i> ${log.user}</span>
            <span>• ${log.timestamp}</span>
          </div>
        </div>
      </div>
    `).join('');
  },

  // ================= 4 MOBILE ROLES CONTROLLER =================
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
      authNote.innerHTML = `<i class="fa-solid fa-circle-info text-brand-purple"></i> Registered visitors can access exhibitions, stalls, products, passes & invoices.`;
      if (authPhoneInput) authPhoneInput.value = "+91 98765 43210";
    } else if (role === 'stall_owner') {
      authNote.innerHTML = `<i class="fa-solid fa-shield-halved text-brand-purple"></i> Stall Owner portal: Login with credentials provided by Admin after stall approval.`;
      if (authPhoneInput) authPhoneInput.value = "vikram@zaverijewels.com";
    } else if (role === 'staff') {
      authNote.innerHTML = `<i class="fa-solid fa-id-badge text-brand-purple"></i> Stall Staff Member portal: Login using credentials received from Stall Owner. Scoped strictly to assigned stall.`;
      if (authPhoneInput) authPhoneInput.value = "+91 98790 12345";
    } else if (role === 'admin_staff') {
      authNote.innerHTML = `<i class="fa-solid fa-user-shield text-brand-purple"></i> Admin Staff portal: Register visitor entries, deliver passes via WhatsApp, verify stalls & authorize exit gate pass.`;
      if (authPhoneInput) authPhoneInput.value = "rajesh.varma@didaarexhibition.com";
    }
  },

  handleAuthSubmit(action) {
    AppData.isLoggedIn = true;
    this.updateUserRole(this.currentRole);

    if (this.currentRole === 'customer') {
      this.switchScreen('home');
      this.showToast("Welcome back, Priya ✨");
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
          <option value="home">🏠 2. Home / Discover Exhibitions</option>
          <option value="stalls">🛍️ 3. Stalls & Category Browsing</option>
          <option value="products">💎 4. Product Catalog & Live Stock</option>
          <option value="pass">🎟️ 5. Digital Exhibition Pass (QR)</option>
          <option value="purchases">🧾 6. Purchase History & Invoices</option>
          <option value="notifications">🔔 7. Notifications</option>
        </optgroup>
      `;
    } else if (role === 'stall_owner') {
      picker.innerHTML = `
        <optgroup label="Stall Owner Modules">
          <option value="auth">🔐 1. Stall Owner Login</option>
          <option value="owner-dashboard">📊 2. Stall Dashboard & Status</option>
          <option value="owner-inventory">📦 3. Stock & Product Catalogue</option>
          <option value="owner-staff">👥 4. Staff Management & Onboarding</option>
          <option value="owner-sales">📈 5. Live Sales & Bill Monitoring</option>
          <option value="owner-post-studio">🎨 6. Festival Post Creator (PNG)</option>
          <option value="owner-profile">🏪 7. Business Profile & Exit Pass</option>
        </optgroup>
      `;
    } else if (role === 'staff') {
      picker.innerHTML = `
        <optgroup label="Staff Member Modules">
          <option value="auth">🔐 1. Staff Member Login</option>
          <option value="staff-pos">🧾 2. POS Quick Billing & Invoice</option>
          <option value="staff-stock">📦 3. In-Hand Allocated Stock</option>
          <option value="staff-sales">📊 4. My Sales & Generated Bills</option>
          <option value="staff-expo">🎪 5. Assigned Exhibition Details</option>
          <option value="staff-profile">👤 6. Staff Profile & Access Policy</option>
        </optgroup>
      `;
    } else if (role === 'admin_staff') {
      picker.innerHTML = `
        <optgroup label="Admin Staff Operations">
          <option value="auth">🔐 1. Admin Staff Secure Login</option>
          <option value="admin-entry">🎟️ 2. Visitor Registration & WhatsApp Pass</option>
          <option value="admin-visitors">👥 3. Exhibition Visitor Tracking List</option>
          <option value="admin-stalls">🏪 4. Stall Verification & Payment Status</option>
          <option value="admin-exit-scan">🚪 5. Stall Exit QR Code Scanner</option>
          <option value="admin-profile">👤 6. Admin Staff Profile & Gate Info</option>
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

  // ================= COMMON HELPERS & MOBILE RENDERING =================
  renderStaffPOS() {
    const container = document.getElementById('staffPosProductList');
    if (!container) return;

    container.innerHTML = AppData.staffUser.allocatedStock.map(p => {
      const currentQty = AppData.posCart.selectedItems[p.id] || 0;
      return `
        <div class="bg-white rounded-2xl p-3 border border-gray-100 soft-shadow flex items-center justify-between gap-3 mb-2.5">
          <img src="${p.image}" class="w-14 h-14 rounded-xl object-cover border border-purple-50 shrink-0">
          <div class="flex-1 min-w-0">
            <span class="text-[9px] font-bold text-brand-purple uppercase">${p.category}</span>
            <h4 class="font-bold text-xs text-gray-900 truncate">${p.name}</h4>
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

    const subEl = document.getElementById('posSubtotal');
    const gstEl = document.getElementById('posGst');
    const totEl = document.getElementById('posGrandTotal');
    const cntEl = document.getElementById('posCartItemsCount');
    const btn = document.getElementById('posSubmitBtn');

    if (subEl) subEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    if (gstEl) gstEl.textContent = `₹${gst.toLocaleString('en-IN')}`;
    if (totEl) totEl.textContent = `₹${grand.toLocaleString('en-IN')}`;
    if (cntEl) cntEl.textContent = `${count} items selected`;
    if (btn) btn.disabled = count === 0;
  },

  generateCustomerBill() {
    this.showToast("Bill generated and sent to customer via WhatsApp! 📲🎉");
    AppData.posCart.selectedItems = {};
    this.renderStaffPOS();
  },

  renderAdminVisitors() {
    const container = document.getElementById('adminVisitorListContainer');
    if (!container) return;
    container.innerHTML = AppData.adminStaffUser.registeredVisitors.map(v => `
      <div class="bg-white rounded-2xl p-3 border border-gray-100 soft-shadow mb-2 flex items-center justify-between text-xs">
        <div>
          <span class="font-mono text-[10px] font-bold text-brand-purple-dark">${v.passId}</span>
          <h4 class="font-bold text-gray-900">${v.name}</h4>
          <p class="text-[10px] text-gray-400">${v.phone} • ${v.entryTime}</p>
        </div>
        <span class="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">Pass Active</span>
      </div>
    `).join('');
  },

  renderAdminStalls() {
    const container = document.getElementById('adminStallListContainer');
    if (!container) return;
    container.innerHTML = AppData.adminStaffUser.exhibitionStalls.map(s => `
      <div class="bg-white rounded-2xl p-3 border border-gray-100 soft-shadow mb-2 text-xs space-y-1">
        <div class="flex justify-between">
          <span class="bg-purple-100 text-brand-purple-dark font-bold px-2 py-0.5 rounded">${s.stallNumber}</span>
          <span class="font-bold ${s.paymentStatus === 'Payment Completed' ? 'text-emerald-600' : 'text-amber-700'}">${s.paymentStatus}</span>
        </div>
        <h4 class="font-bold text-gray-900">${s.stallName}</h4>
        <p class="text-gray-500">Owner: ${s.ownerName} (${s.ownerPhone})</p>
      </div>
    `).join('');
  },

  searchExistingCustomer(q) {
    const res = document.getElementById('adminCustSearchResult');
    if (!res) return;
    if (q.length > 2) {
      res.classList.remove('hidden');
      res.innerHTML = `<div class="bg-emerald-50 text-emerald-900 p-2 rounded-xl text-[11px]">No active duplicate found for "${q}". Proceed.</div>`;
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
    const s = AppData.adminStaffUser.exhibitionStalls.find(x => x.stallNumber === stallNo);
    if (!s) return;
    if (s.paymentStatus === "Payment Completed") {
      this.showToast(`✓ Payment Cleared! Gate 3 Exit Authorized for ${s.stallName}. 🚪✅`);
    } else {
      alert(`⚠️ EXIT BLOCKED: ${s.stallName} has remaining dues pending. Redirect to Admin Accounts Desk!`);
    }
  },

  renderNotifications(role = this.currentRole) {
    const container = document.getElementById('notificationListContainer');
    if (!container) return;
    const list = AppData.notifications[role] || AppData.notifications.customer;
    container.innerHTML = list.map(n => `
      <div class="bg-white rounded-2xl p-3.5 border border-purple-100 soft-shadow mb-3 flex gap-3">
        <div class="w-10 h-10 rounded-xl bg-purple-50 text-brand-purple-dark flex items-center justify-center shrink-0">
          <i class="fa-solid fa-bell text-sm"></i>
        </div>
        <div class="flex-1">
          <div class="flex items-center justify-between"><h4 class="font-bold text-xs text-gray-900">${n.title}</h4><span class="text-[10px] text-gray-400">${n.time}</span></div>
          <p class="text-[11px] text-gray-600 mt-1">${n.message}</p>
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
  }
};

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
