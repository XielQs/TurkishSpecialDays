/*!
 * TurkishSpecialDays JavaScript Library v1.0
 *
 * Released under the MIT license
 *
 * Date: 2021-08-30
 */
"use strict";

//! Creating Class
class TSD {
	SpecialDays = {
		//! Şubat
		"9 şubat": "Dünya Sigarayı Bırakma Günü",
		"14 şubat": "Sevgililer Günü",
		//! Mart
		"8 mart": "Dünya Kadınlar Günü",
		"12 mart": "İstiklâl Marşı’nın Kabulü ve Mehmet Akif ERSOY’u Anma Günü",
		"18 mart": "Şehitler Günü Ve Çanakkale Zaferi",
		//! Nisan
		"23 nisan": "Ulusal Egemenlik ve Çocuk Bayramı",
		//! Mayıs
		"1 mayıs": "Emek ve İşçi Bayramı",
		"19 mayıs": "Atatürk’ü Anma ve Gençlik ve Spor Bayramı",
		"29 mayıs": "İstanbul’un Fethi",
		//! Ağustos
		"30 ağustos": "Zafer Bayramı",
		//! Eylül
		"19 eylül": "Şehit ve Gaziler Günü",
		//! Ekim
		"29 ekim": "Cumhuriyet Bayramı",
		//! Kasım
		"10 kasım": "Mustafa Kemal Atatürk’ün Ölüm Yıldönümü",
		//! Aralık
		"5 aralık": "Kadın Hakları Günü",
	};
	constructor(config) {
		if (config && typeof config !== "object") {
			throw new Error("Config must be an object");
		}
		this.config = config || {
			top: "0",
			bottom: "unset",
			left: "0px",
			right: "unset",
			imgTitlePrefix: "Türkiye Cumhuriyeti",
			disabled: false,
		};
		if (!this.testConfigStatus(config)) {
			let err = "Config isn't valid";
			document.write('<font color="red">TSD Bir Hata İle Karşılaştı ; "' + err + '" Detaylı Bilgi İçin Consolea Bakın.</font>');
			throw new TypeError(err);
		}
	}
	testConfigStatus(config = null) {
		config = config ? config : this.config;
		if (config.top && config.bottom && config.left && config.right && config.imgTitlePrefix !== undefined && config.disabled !== undefined) {
			return true;
		} else {
			return false;
		}
	}
	isActivated() {
		if (this.testConfigStatus() && !this.config.disabled) {
			return true;
		} else {
			return false;
		}
	}
	getDays() {
		return this.SpecialDays;
	}
	testAvabileDays(flag = true) {
		const months = ["ocak", "şubat", "mart", "nisan", "mayıs", "haziran", "temmuz", "ağustos", "eylül", "ekim", "kasım", "aralık"];
		let d = new Date();
		let days = this.getDays();
		let currentDate = d.getDate() + " " + months[d.getMonth()];
		if (days[currentDate]) {
			if (flag) {
				this.showFlag();
			}
			return days[currentDate];
		} else {
			return false;
		}
	}
	showFlag() {
		if (!this.isActivated()) {
			return false;
		}
		let div = document.createElement("div");
		let img = div.appendChild(document.createElement("img"));
		img.setAttribute("src", "https://tolerance-homes.com/storage/images/pages/qP0fv1mqZpQwoJDnLJSeaxis4WhOye64LrbNaPet.jpeg");
		img.setAttribute("id", "TSDimgSpecialDayFlag");
		img.setAttribute("title", `${this.config.imgTitlePrefix} ${this.testAvabileDays(0)}`);
		img.style.width = "150px";
		img.style.position = "absolute";
		img.style.zIndex = 1001;
		//! Position
		img.style.top = this.config.top;
		img.style.bottom = this.config.bottom;
		img.style.left = this.config.left;
		img.style.right = this.config.right;
		document.body.appendChild(div);
	}
}
