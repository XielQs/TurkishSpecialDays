# TurkishSpecialDays

Türkiye Cumhuriyetinin Özel Günlerini, Bayramlarını Html Sayfanızda Yeri Gelince Göstermeye Başlar

# Kurulum

Basir Bir HTML Sayfasıyla Örneğimize Başlıyalım

```html
<html>
	<head>
		<title>TurkishSpecialDays - Test</title>
	</head>
	<body>
		<!-- TSD'i Dahil Edelim -->
		<script src="./TSD-1.0.js"></script>
		<!-- Scriptimizi Dahil Edelim -->
		<script src="./main.js"></script>
	</body>
</html>
```

### HTML Sayfamıza TSD'ı Dahil Ettiğimize Göre JavaScript İşlerine Başlıyalım

```js
const tsd = new TSD(); // TSD Sınıfımızı Başlatalım

// Consolumuza Bayramdaysak Bayrağı Çağırmadan Yazalım
console.log(tsd.testAvabileDays(false)); // 31 Ağustosda Bayram Yok O Yüzden False Döner
```

## O Gün Bayramsa Türk Bayrağını Çağıralım

```js
const tsd = new TSD(); // TSD Sınıfımızı Başlatalım

tsd.testAvabileDays(); // O Gün Bayramsa Bayrağı Çağırmış Olduk
```

Büyük İhtimalle Bayrak Bu Şekilde Gelicektir

<img src="https://i.hizliresim.com/s7hjiei.jpg" wdith="100px" />

O Zaman Hadi Ayarlara Bakalım

# Ayarlar ( Options )

Ayarları Bir Obje Halinde Sınıfın Başlangıcında Göndermeniz Gerekir Göndermeniz gereken Değerler Altta Listelenmiştir

- top - Bayrağın Üstten Yüksekliğini Belirler (Standart : "0")
- bottom - Bayrağın Alttan Yüksekliğini Belirler (Standart : "unset")
- left - Bayrağın Soldan Boşluğunu Belirler (Standart : "0")
- right - Bayrağın Sağdan Boşluğunu Belirler (Standart : "unset")
- imgTitlePrefix - Bayrağın Üzerine Gelince Çıkan Yazının Başını Belirler (Standart : "Türkiye Cumhuriyeti")
- disabled - true Dönerse Sistem Kapanır (Standart : false)

### Uygulama

```js
// Config
const config = {
	top: "0",
	bottom: "unset",
	left: "0",
	right: "unset",
	imgTitlePrefix: "Türkiye Cumhuriyeti",
	disabled: false,
};

const tsd = new TSD(config); // Sınıfa  Configi Tanımlama
```

Author : GamerboyTR Mail : offical.gamerboytr@yandex.com Web : http://www.gamerboytr.ml
