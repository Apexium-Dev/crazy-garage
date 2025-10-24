# 🎨 GitHub Issues Admin Panel - Complete Guide

## How It Works

Вашиот сајт користи **GitHub Issues** како admin панел! Целиот процес е автоматизиран:

1. **Owner оди на** `/admin` страната
2. **Пополнува форма** со наслови и описи (на 3 јазици)
3. **Клика "Submit to GitHub"** → се отвора GitHub Issue автоматично
4. **Закачува слики** со drag & drop директно во Issue
5. **GitHub Action автоматски**:
   - Парсира Issue
   - Екстрахира URLs на сликите
   - Ажурира `gallery.json`
   - Commit-ува во repo
   - Сајтот се deploy-ува!

## 🚀 Setup Instructions

### 1. GitHub Actions Permissions

Иди во **Settings → Actions → General** и осигурај се дека:
- ✅ Workflow permissions се "Read and write permissions"
- ✅ Allow all actions and reusable workflows

### 2. Update Repo Name (Optional)

Отвори `src/app/admin/page.tsx` и ако е потребно промени:
```javascript
const GITHUB_REPO = "Apexium-Dev/crazy-garage";
```

### 3. Test It!

1. Оди на `http://localhost:3000/admin`
2. Пополни форма
3. Кликни "Submit to GitHub"
4. Прикачи слики во GitHub Issue
5. Submit Issue-то
6. Gallery item автоматски се додава!

## 👤 For Non-Technical Users

### Како да додадеш нова слика:

1. **Оди на**: `https://yourdomain.com/admin`
2. **Пополни ги сите полиња** (наслови и описи на 3 јазици)
3. **Кликни "🚀 Submit to GitHub"**
4. **На GitHub страната**, прикачи твоите слики (drag & drop)
5. **Кликни "Submit new issue"**
6. **Готово!** Сликата ќе се појави на сајтот следниот deploy

### Сликите мора да бидат:
- ✅ PNG, JPG, JPEG, или WebP
- ✅ Одделни "before" и "after" слики
- ✅ GitHub автоматски ги хостира бесплатно!

## 🔧 How It Works Internally

### GitHub Issue Template
- `.github/ISSUE_TEMPLATE/gallery-item.yml` - дефинира формата
- Label: `gallery` (required)

### GitHub Action Workflow
- `.github/workflows/add-gallery-item.yml` - слуша за нови Issues
- Парсира податоци од Issue body
- Екстрахира image URLs од GitHub attachments
- Ажурира `public/data/gallery.json`
- Commit-ува промени

### Admin Form
- `src/app/admin/page.tsx` - форма на сајтот
- Редиректира на GitHub Issue creation
- Pre-fills сите податоци

## 🎯 Benefits

✅ **Без Git** - клиентот едноставно клика Submit  
✅ **Без терминал** - се е преку GUI  
✅ **Без backend** - GitHub Issues е "backend"  
✅ **GitHub хостира слики** - бесплатно и автоматично  
✅ **Автоматско version control** - се во repo  
✅ **Лесно враќање** - можеш да revert commit  
✅ **100% бесплатно** - GitHub Pages + Issues + Actions  

## 🛡️ Security

### Option 1: Public Repo (Current)
- Сајтот е јавен, но само ти имаш permissions за GitHub Issues
- Само organization members можат да креираат Issues

### Option 2: Private Repo
- Repo е приватно
- Само тие со пристап можат да додаваат gallery items

### Option 3: Password Protection
- Додај password поле во admin form
- Провери password пред редирект на GitHub

## 📝 Gallery Data Structure

Gallery items се зачувани во `public/data/gallery.json`:

```json
{
  "timestamp": 1742875768381,
  "title": {
    "en": "Car Detailing",
    "mk": "Детаилирање на автомобил",
    "sq": "Detajimi i makinës"
  },
  "description": {
    "en": "Professional detailing...",
    "mk": "Професионална...",
    "sq": "Transformim..."
  },
  "beforeImage": "https://user-images.githubusercontent.com/...",
  "afterImage": "https://user-images.githubusercontent.com/..."
}
```

## 🐛 Troubleshooting

### GitHub Action не работи?
- Провери дали Issues имаат правилно label (`gallery`)
- Провери дали GitHub Actions има write permissions
- Погледни GitHub Actions logs за детали

### Сликите не се појавуваат?
- GitHub треба малку време да ги upload-не сликите
- Провери дали URLs се правилни во `gallery.json`
- Провери Network tab во browser за 404 errors

### basePath проблеми?
- Локално: нема basePath (localhost:3000)
- Production: има basePath (/crazy-garage/)
- За custom domain, отстрани basePath од `next.config.ts`

## 🎓 Next Steps

Ако сакаш да го направиш repo-то со custom domain:
1. Купи домен (нпр. crazygarage.com)
2. Во GitHub: Settings → Pages → Custom domain
3. Ажурирај DNS records
4. Отстрани basePath од `next.config.ts`
5. Сајтот ќе биде на твојот домен!

