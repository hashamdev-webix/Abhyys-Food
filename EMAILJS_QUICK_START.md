# ⚡ EmailJS Quick Start (5 Minutes)

## 🎯 Just Follow These Steps:

### 1️⃣ Sign Up (1 min)

```
https://www.emailjs.com/
→ Sign Up Free (with Google)
```

### 2️⃣ Add Email Service (2 min)

```
Dashboard → Email Services → Add New Service
→ Select Gmail
→ Service ID: service_abhyys
→ Connect your Gmail
→ Create Service
→ COPY SERVICE ID ✂️
```

### 3️⃣ Create Template (2 min)

```
Dashboard → Email Templates → Create New Template

Name: Quote Request Confirmation

Subject: Thank You for Your Quote Request - Abhyy's Food

Content: Copy from EMAILJS_SETUP_GUIDE.md (Step 3.1)

Settings:
  To Email: {{to_email}}
  From Name: Abhyy's Food
  Reply To: {{reply_to}}

→ Save
→ COPY TEMPLATE ID ✂️
```

### 4️⃣ Get Public Key (30 sec)

```
Dashboard → Account (⚙️) → General
→ COPY PUBLIC KEY ✂️
```

### 5️⃣ Update .env.local (30 sec)

```env
VITE_EMAILJS_SERVICE_ID=service_abhyys
VITE_EMAILJS_TEMPLATE_ID=template_xyz123
VITE_EMAILJS_PUBLIC_KEY=a1b2c3d4e5f6g7h8
```

### 6️⃣ Restart & Test (1 min)

```bash
cd frontend
npm run dev
```

→ Submit form
→ Check email inbox ✅

---

## 📝 Email Template (Copy-Paste Ready)

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
          <p style="background: #fff; padding: 15px;">{{customer_message}}</p>
        </div>

        <h3>📞 Need Immediate Assistance?</h3>
        <p>Feel free to contact us:</p>
        <ul>
          <li><strong>Phone:</strong> +1 403-836-3512</li>
          <li><strong>Email:</strong> info@abhyysfoods.com</li>
          <li>
            <strong>Address:</strong> 8500 84 ST SE, Calgary, Alberta, Canada
          </li>
        </ul>

        <p style="margin-top: 30px;">We look forward to serving you!</p>
        <p><strong>— Abhyy's Food Team</strong></p>
      </div>

      <div class="footer">
        <p>&copy; 2026 Abhyy's Food. All rights reserved.</p>
      </div>
    </div>
  </body>
</html>
```

---

## ✅ Checklist

- [ ] EmailJS account created
- [ ] Service ID copied
- [ ] Template ID copied
- [ ] Public Key copied
- [ ] .env.local updated
- [ ] Server restarted
- [ ] Test email received

---

## 🎉 Done!

Read **EMAILJS_SETUP_GUIDE.md** for detailed instructions and troubleshooting.
