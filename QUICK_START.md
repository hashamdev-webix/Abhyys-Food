# 🚀 Quick Start - Email Integration

## Just 5 Steps!

### 1️⃣ Install Dependencies

```bash
cd functions
npm install
```

### 2️⃣ Get Gmail App Password

1. Go to: https://myaccount.google.com/apppasswords
2. Enable 2-Step Verification (if not enabled)
3. Create App Password for "Mail" → "Other device"
4. Copy the 16-digit password

### 3️⃣ Update Email in `functions/index.js`

Line 10-14:

```javascript
auth: {
  user: "info@abhyysfoods.com",  // ← Your email
  pass: "xxxx xxxx xxxx xxxx",    // ← App password
}
```

Also update Line 25 and 61:

```javascript
from: '"Abhyy\'s Food" <info@abhyysfoods.com>',
```

### 4️⃣ Upgrade Firebase to Blaze Plan

1. Open: https://console.firebase.google.com
2. Select: abhyys-food project
3. Go to: Settings → Usage and billing
4. Click: Modify Plan → Select Blaze Plan
5. Add card (won't be charged for small usage)

### 5️⃣ Deploy

```bash
cd ..
firebase login
firebase deploy --only functions
```

## ✅ Test It!

Submit a form → Check email inbox!

## 📖 Detailed Guide

Read `EMAIL_SETUP_GUIDE.md` for troubleshooting and details.
