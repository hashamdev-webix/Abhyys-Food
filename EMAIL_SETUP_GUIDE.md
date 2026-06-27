# 📧 Email Integration Setup Guide

## Overview

Is setup mein jab bhi koi user form submit karega, automatically 2 emails jayengi:

1. **Customer ko** - Confirmation email
2. **Admin ko** - Notification email with customer details

---

## 🚀 Step-by-Step Setup

### Step 1: Gmail App Password Setup

#### Why App Password?

Google ne security ke liye normal password use karna band kar diya hai third-party apps ke liye. Ab aapko **App Password** banana padega.

#### How to Create App Password:

1. **Google Account Settings** mein jao: https://myaccount.google.com/
2. **Security** section mein jao
3. **2-Step Verification** enable karo (agar pehle se nahi hai)
4. **2-Step Verification** ke baad, "App passwords" option dikhega
5. Click on **"App passwords"**
6. Select:
   - **App**: Mail
   - **Device**: Other (Custom name) - "Abhyys Food Website" likh do
7. **Generate** button click karo
8. 16-digit password milega (e.g., `abcd efgh ijkl mnop`)
9. Ye password copy kar lo ⚠️ **Ye sirf ek baar dikhega!**

### Step 2: Firebase Functions Setup

#### Install Dependencies

```bash
cd "/Users/macbookair/Webix Solutions/21 Abhyy's Food/Abhyys-Food/functions"
npm install
```

#### Update Email Configuration

File: `functions/index.js`

Line 10-14 mein apni email details daalo:

```javascript
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-actual-email@gmail.com", // ← Your Gmail address
    pass: "xxxx xxxx xxxx xxxx", // ← App Password from Step 1
  },
});
```

**Example:**

```javascript
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "info@abhyysfoods.com",
    pass: "abcd efgh ijkl mnop", // 16-digit app password
  },
});
```

#### Update Sender Email

Line 25 aur line 61 mein bhi email update karo:

```javascript
from: '"Abhyy\'s Food" <your-actual-email@gmail.com>',
```

### Step 3: Firebase Billing Setup

⚠️ **IMPORTANT:** Cloud Functions use karne ke liye Firebase project ko **Blaze Plan (Pay as you go)** mein upgrade karna padega.

**Don't worry!**

- Free tier bahut generous hai
- Pehle 2 million function invocations free hain per month
- Small websites ke liye koi charge nahi lagta

#### How to Upgrade:

1. Firebase Console kholo: https://console.firebase.google.com
2. **abhyys-food** project select karo
3. Left sidebar mein **⚙️ (Settings)** > **Usage and billing**
4. **Modify Plan** click karo
5. **Blaze Plan** select karo
6. Credit/Debit card details daalo (backup ke liye, charge nahi hoga unless limits cross karein)

### Step 4: Deploy Functions

```bash
# Login to Firebase (if not already)
firebase login

# Set project
firebase use abhyys-food

# Deploy functions
firebase deploy --only functions
```

Deployment ke baad aapko ye dikkega:

```
✔  functions[sendQuoteConfirmation(us-central1)]: Successful create operation.
```

### Step 5: Test It!

1. Website kholo aur form fill karo
2. Submit karo
3. Check:
   - Firebase Console → Firestore → data save hua?
   - Customer email inbox → confirmation email aayi?
   - Admin email inbox → notification email aayi?

---

## 🔧 Troubleshooting

### Problem: "Error: 535-5.7.8 Username and Password not accepted"

**Solution:** App Password galat hai ya 2-Step Verification enabled nahi hai

### Problem: "Billing account not configured"

**Solution:** Firebase project ko Blaze plan mein upgrade karo

### Problem: Function deploy nahi ho raha

**Solution:**

```bash
# Node version check karo
node --version  # Should be 18.x or higher

# Firebase CLI update karo
npm install -g firebase-tools@latest
```

### Problem: Email bhej raha hai lekin nahi aa rahi

**Solution:**

- Spam folder check karo
- Gmail security settings check karo
- Console logs check karo: `firebase functions:log`

---

## 📊 Email Templates Customization

### Customer Email Template

File: `functions/index.js` (Line 25-70)

Colors change karne ke liye:

- Primary color: `#4CAF50` (Green)
- Background: `#f9f9f9`
- Footer: `#333`

### Admin Email Template

File: `functions/index.js` (Line 73-115)

Highlight color: `#FF5722` (Orange)

---

## 💰 Cost Estimation

**Free Tier Limits:**

- 2M function invocations/month
- 400,000 GB-seconds/month
- 200,000 CPU-seconds/month

**Typical Usage for Small Business:**

- 100 form submissions/day = 3,000/month
- Each submission = 1 function call
- **Cost: $0 (Free tier mein)**

Agar monthly 100,000+ emails bhejni hain, tab charges apply honge (approx $0.40 per additional 1M invocations).

---

## 🔐 Security Best Practices

1. ✅ Never commit email credentials to Git
2. ✅ Use App Passwords, not regular passwords
3. ✅ Keep Firebase Rules strict
4. ✅ Monitor function logs regularly
5. ✅ Set up billing alerts in Firebase Console

---

## 📞 Support

Agar koi issue aaye to:

1. Check Firebase Functions logs: `firebase functions:log`
2. Check console errors: Browser DevTools
3. Verify email credentials are correct
4. Ensure Firestore rules allow writes

---

## ✅ Checklist

- [ ] Gmail App Password generated
- [ ] `functions/index.js` mein email credentials updated
- [ ] Firebase Blaze plan activated
- [ ] Functions deployed successfully
- [ ] Test email received
- [ ] Admin notification received

---

Good luck! 🎉
