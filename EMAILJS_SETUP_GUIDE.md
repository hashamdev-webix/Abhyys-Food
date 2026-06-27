# 📧 EmailJS Setup Guide (100% FREE - NO PAYMENT NEEDED)

## ✅ Benefits

- ✅ **Completely FREE** (300 emails/month)
- ✅ **NO Payment Method** required
- ✅ **NO Credit Card** needed
- ✅ **5 Minutes** setup
- ✅ Professional email templates

---

## 🚀 Step-by-Step Setup

### Step 1: Create EmailJS Account

1. Go to: **https://www.emailjs.com/**
2. Click **"Sign Up Free"**
3. Sign up with:
   - Google account (recommended) OR
   - Email + Password
4. Verify your email (check inbox)

---

### Step 2: Add Email Service

1. **Login to EmailJS Dashboard**: https://dashboard.emailjs.com/
2. Left sidebar → Click **"Email Services"**
3. Click **"Add New Service"** button
4. Select **"Gmail"** (recommended)
   - Ya koi bhi service jo aap use karte ho (Yahoo, Outlook, etc.)
5. Fill details:
   - **Service ID**: `service_abhyys` (ya kuch bhi unique name)
   - **Gmail Account**: Your Gmail (e.g., `info@abhyysfoods.com`)
6. Click **"Connect Account"**
7. Google authorization page khulega → Allow access
8. Click **"Create Service"**
9. ✅ **Copy the Service ID** (e.g., `service_abhyys`)

---

### Step 3: Create Email Template

#### 3.1 Create Customer Confirmation Template

1. Left sidebar → Click **"Email Templates"**
2. Click **"Create New Template"**
3. Fill template:

**Template Name**: `Quote Request Confirmation`

**Subject**:

```
Thank You for Your Quote Request - Abhyy's Food
```

**Content** (Copy this HTML):

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        color: #333;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
      }
      .header {
        background-color: #4caf50;
        color: white;
        padding: 30px;
        text-align: center;
      }
      .content {
        background-color: #f9f9f9;
        padding: 30px;
      }
      .info-box {
        background: white;
        padding: 20px;
        margin: 15px 0;
        border-left: 4px solid #4caf50;
      }
      .footer {
        background-color: #333;
        color: white;
        padding: 20px;
        text-align: center;
        font-size: 14px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>🎉 Thank You, {{customer_name}}!</h1>
      </div>

      <div class="content">
        <h2>We've Received Your Quote Request</h2>
        <p>
          Thank you for reaching out to <strong>Abhyy's Food</strong>. We've
          received your request and our team will get back to you within 24
          hours.
        </p>

        <div class="info-box">
          <h3>📋 Your Request Details:</h3>
          <p><strong>Name:</strong> {{customer_name}}</p>
          <p><strong>Email:</strong> {{customer_email}}</p>
          <p><strong>Phone:</strong> {{customer_phone}}</p>
          <p><strong>Message:</strong></p>
          <p
            style="background: #fff; padding: 15px; border-left: 4px solid #4CAF50;"
          >
            {{customer_message}}
          </p>
        </div>

        <h3>📞 Need Immediate Assistance?</h3>
        <p>Feel free to contact us directly:</p>
        <ul>
          <li><strong>Phone:</strong> +1 403-836-3512</li>
          <li><strong>Email:</strong> info@abhyysfoods.com</li>
          <li>
            <strong>Address:</strong> 8500 84 ST SE, Calgary, Alberta, Canada
            T3S 0A1
          </li>
        </ul>

        <p style="margin-top: 30px;">We look forward to serving you!</p>
        <p><strong>— Abhyy's Food Team</strong></p>
      </div>

      <div class="footer">
        <p>&copy; 2026 Abhyy's Food. All rights reserved.</p>
        <p>High-quality food with consistent standards</p>
      </div>
    </div>
  </body>
</html>
```

4. **Settings** tab mein:
   - **To Email**: `{{to_email}}` (ye variable automatically customer email bhejega)
   - **From Name**: `Abhyy's Food`
   - **From Email**: Your Gmail (jo Step 2 mein connect kiya tha)
   - **Reply To**: `{{reply_to}}`

5. Click **"Save"**
6. ✅ **Copy the Template ID** (e.g., `template_xyz123`)

---

### Step 4: Get Public Key (API Key)

1. Left sidebar → Click **"Account"** (gear icon ⚙️)
2. Tab → **"General"**
3. Find **"Public Key"** section
4. ✅ **Copy your Public Key** (e.g., `a1b2c3d4e5f6g7h8`)

---

### Step 5: Update Environment Variables

Open file: **`frontend/.env.local`**

Add these lines:

```env
VITE_EMAILJS_SERVICE_ID=service_abhyys
VITE_EMAILJS_TEMPLATE_ID=template_xyz123
VITE_EMAILJS_PUBLIC_KEY=a1b2c3d4e5f6g7h8
```

**⚠️ IMPORTANT:** Replace with your actual values from Steps 2, 3, and 4!

---

### Step 6: Test It!

1. **Restart your dev server:**

   ```bash
   cd frontend
   npm run dev
   ```

2. **Open website** in browser
3. **Fill the form** with your email
4. **Submit**
5. **Check your inbox** → Email aayi? ✅

---

## 📊 Email Template Variables

Ye variables automatically replace honge:

| Variable               | Description             | Example                    |
| ---------------------- | ----------------------- | -------------------------- |
| `{{customer_name}}`    | Customer ka naam        | "Hasham Ul Haq"            |
| `{{customer_email}}`   | Customer ki email       | "hashamulhaq068@gmail.com" |
| `{{customer_phone}}`   | Customer ka phone       | "0320 348 7887"            |
| `{{customer_message}}` | Customer ka message     | "Testing"                  |
| `{{to_email}}`         | Email kis ko bhejni hai | Customer email             |
| `{{reply_to}}`         | Reply to email          | Customer email             |

---

## 🎨 Customize Email Design

### Change Colors:

File: `EMAILJS_SETUP_GUIDE.md` → Template Content

- **Primary Green**: `#4CAF50` → Change to your brand color
- **Background**: `#f9f9f9`
- **Footer**: `#333`

### Add Logo:

```html
<img
  src="https://yourdomain.com/logo.png"
  alt="Logo"
  style="max-width: 200px;"
/>
```

### Change Fonts:

```css
font-family: "Helvetica", "Arial", sans-serif;
```

---

## 💡 Pro Tips

### Create Admin Notification Email (Optional)

Agar aap ko bhi notification email chahiye jab koi form submit kare:

1. Create another template: **"Admin Notification"**
2. Subject: `New Quote Request from {{customer_name}}`
3. Content: Customer details with alert styling
4. In code, add second `emailjs.send()` call

Code example:

```javascript
// Send to admin
await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  "template_admin_123", // Different template for admin
  { ...emailParams, to_email: "info@abhyysfoods.com" },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
);
```

---

## 🔧 Troubleshooting

### Problem: Email nahi aa rahi

**Solutions:**

1. ✅ Check spam/junk folder
2. ✅ Verify Template ID & Service ID correct hain
3. ✅ Check browser console for errors (F12)
4. ✅ Test template in EmailJS dashboard (Test button)
5. ✅ Verify Gmail account properly connected hai

### Problem: "Service not found" error

**Solution:**

- `.env.local` file mein VITE_EMAILJS_SERVICE_ID check karo
- Dev server restart karo: `npm run dev`

### Problem: "Public key required" error

**Solution:**

- VITE_EMAILJS_PUBLIC_KEY properly set hai?
- Quotation marks nahi hone chahiye values mein

### Problem: Variables show nahi ho rahe ({{customer_name}})

**Solution:**

- Template mein variable names exactly same hone chahiye
- Code mein `emailParams` object check karo
- Template → Settings → Preview se test karo

---

## 📈 Free Plan Limits

| Feature          | Free Plan     |
| ---------------- | ------------- |
| Emails per month | **300**       |
| Email templates  | **Unlimited** |
| Email services   | **2**         |
| Support          | Community     |
| Payment required | **NO** ❌     |

**300 emails = ~10 emails per day**

Agar zyada chahiye:

- Personal Plan: $9/month (1000 emails)
- Business Plan: $35/month (10,000 emails)

---

## ✅ Final Checklist

- [ ] EmailJS account created
- [ ] Gmail service connected
- [ ] Email template created
- [ ] Public Key copied
- [ ] `.env.local` file updated
- [ ] Dev server restarted
- [ ] Test email sent successfully
- [ ] Email received in inbox

---

## 🎉 You're Done!

Ab jab bhi koi form submit karega:

1. ✅ Data Firebase mein save hoga
2. ✅ Customer ko confirmation email jayegi
3. ✅ Everything FREE!

---

## 🆘 Need Help?

- **EmailJS Documentation**: https://www.emailjs.com/docs/
- **EmailJS Dashboard**: https://dashboard.emailjs.com/
- **Community Support**: https://www.emailjs.com/docs/community/

---

**Happy Emailing! 🚀**
