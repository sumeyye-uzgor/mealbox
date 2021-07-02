const data = {
    "menus": [
        {
            "key": "main",
            "description": "Siparişinizi oluşturun",
            "items": [
                {
                    "name": "İndirimli Menüler",
                    "caption": "İndirimli Menüler",
                    "image": "https://i.ibb.co/XVhX2yr/kirmizi-et-menu.jpg",
                    "items": [
                        {
                            "name": "Kırmızı Et Menü",
                            "caption": "Kırmızı Et Menü",
                            "price": 2095,
                            "subMenus": [
                                "kirmizi-et-ana-yemekler",
                                "indirimli-menu-yan-lezzetler-1",
                                "indirimli-menu-yan-lezzetler-2",
                                "indirimli-menu-tatli",
                                "indirimli-menu-icecek"
                            ],
                            "image": "https://i.ibb.co/XVhX2yr/kirmizi-et-menu.jpg"
                        },
                        {
                            "name": "Beyaz Et Menü",
                            "caption": "Beyaz Et Menü",
                            "price": 1895,
                            "subMenus": [
                                "beyaz-et-ana-yemekler",
                                "indirimli-menu-yan-lezzetler-1",
                                "indirimli-menu-yan-lezzetler-2",
                                "indirimli-menu-tatli",
                                "indirimli-menu-icecek"
                            ],
                            "image": "https://i.ibb.co/S3W1VHY/beyaz-et-menu.jpg"
                        },
                        {
                            "name": "Sebzeli / Etli Menü",
                            "caption": "Sebzeli / Etli Menü",
                            "price": 1695,
                            "subMenus": [
                                "sebzeli-etli-indirimli-menu-ana-yemekler",
                                "indirimli-menu-yan-lezzetler-1",
                                "indirimli-menu-yan-lezzetler-2",
                                "indirimli-menu-tatli",
                                "indirimli-menu-icecek"
                            ],
                            "image": "https://i.ibb.co/TKCmMXv/sebzeli-etli-menu.jpg"
                        },
                        {
                            "name": "Diyet Menü",
                            "caption": "Diyet Menü",
                            "price": 1695,
                            "subMenus": [
                                "diyet-indirimli-menu-ana-yemekler",
                                "indirimli-menu-yan-lezzetler-1",
                                "indirimli-menu-yan-lezzetler-2",
                                "indirimli-menu-icecek"
                            ],
                            "image": "https://i.ibb.co/RSVtfX2/diyet-menu.jpg"
                        },
                        {
                            "name": "4 Kişilik Menü - Etli Yaprak Sarma",
                            "caption": "4 Kişilik Menü - Etli Yaprak Sarma",
                            "price": 44,
                            "image": "https://i.ibb.co/GVHBDh2/4-kisilik-menu-etli-yaprak-sarma.jpg"
                        },
                        {
                            "name": "Coca-Cola Menü",
                            "caption": "Coca-Cola Menü",
                            "price": 1745,
                            "subMenus": [
                                "cocacola-indirimli-menu-ana-yemekler",
                                "indirimli-menu-icecek",
                                "indirimli-menu-yan-lezzetler-1",
                                "indirimli-menu-yan-lezzetler-2",
                                "indirimli-menu-tatli"
                            ],
                            "image": "https://i.ibb.co/jvhjKvs/coca-cola-light-cam-sise.jpg"
                        },
                        {
                            "name": "4 Kişilik Menü - Köri Soslu Tavuk",
                            "caption": "4 Kişilik Menü - Köri Soslu Tavuk",
                            "price": 55,
                            "image": "https://i.ibb.co/0FLnybH/4-kisilik-menu-kori-soslu-tavuk.jpg"
                        },
                        {
                            "name": "4 Kişilik Menü - İsveç Köfte",
                            "caption": "4 Kişilik Menü - İsveç Köfte",
                            "price": 66,
                            "image": "https://i.ibb.co/ZKg37sH/4-kisilik-menu-isvec-kofte.jpg"
                        },
                        {
                            "name": "Vejetaryen Menü",
                            "caption": "Vejetaryen Menü",
                            "price": 1695,
                            "subMenus": [
                                "vejeteryan-indirimli-menu-ana-yemekler",
                                "indirimli-menu-yan-lezzetler-1",
                                "indirimli-menu-yan-lezzetler-2"
                            ],
                            "image": "https://i.ibb.co/3rsqSz5/vejeteryan-menu.jpg"
                        }
                    ]
                },
                {
                    "name": "Kırmızı Et Yemekleri",
                    "caption": "Kırmızı Et Yemekleri",
                    "image": "https://i.ibb.co/yX11mcW/hunkar-begendi.jpg",
                    "items": [
                        {
                            "name": "Hünkarbeğendi",
                            "caption": "Hünkarbeğendi",
                            "price": 1745,
                            "image": "https://i.ibb.co/yX11mcW/hunkar-begendi.jpg",
                        },
                        {
                            "name": "Domates Soslu İsveç Köfte",
                            "caption": "Domates Soslu İsveç Köfte",
                            "price": 1745,
                            "image": "https://i.ibb.co/n1Qs3bv/isvec-kofte.jpg"
                        },
                        {
                            "name": "Patates Püresi Yatağında Köfte",
                            "caption": "Patates Püresi Yatağında Köfte",
                            "price": 1475,
                            "image": "https://i.ibb.co/KWycR9L/patates-puresi-yataginda-kofte.jpg"
                        },
                        {
                            "name": "Beğendi Yatağında Köfte",
                            "caption": "Beğendi Yatağında Köfte",
                            "price": 1475,
                            "image": "https://i.ibb.co/ZBLR09H/begendi-yataginda-kofte.jpg"
                        },
                        {
                            "name": "Izgara Köfte ve Karışık Sebze",
                            "caption": "Izgara Köfte ve Karışık Sebze",
                            "price": 1475,
                            "image": "https://i.ibb.co/RTZYv0q/izgara-kofte-ve-karisik-sebze.jpg"
                        },
                        {
                            "name": "Orman Kebabı",
                            "caption": "Orman Kebabı",
                            "price": 1475,
                            "image": "https://i.ibb.co/ZJcvtK4/orman-kebabi.jpg"
                        },
                        {
                            "name": "Dana Kavurma ve Şehriyeli Pilav",
                            "caption": "Dana Kavurma ve Şehriyeli Pilav",
                            "price": 2195,
                            "image": "https://i.ibb.co/Hpv2NQL/dana-kavurma-ve-sehriyeli-pilav.jpg"
                        }
                    ]
                },
                {
                    "name": "Sebzeli Etli Yemekler",
                    "caption": "Sebzeli Etli Yemekler",
                    "image": "https://i.ibb.co/YX0qKKb/etli-yaprak-sarma-ve-yogurt.jpg",
                    "items": [
                        {
                            "name": "Etli Asma Yaprağı Sarma ve Yoğurt",
                            "caption": "Etli Asma Yaprağı Sarma ve Yoğurt",
                            "price": 1745,
                            "image": "https://i.ibb.co/YX0qKKb/etli-yaprak-sarma-ve-yogurt.jpg"
                        },
                        {
                            "name": "Zerdeçal Soslu Karışık Sebze",
                            "caption": "Zerdeçal Soslu Karışık Sebze",
                            "price": 1745,
                            "image": "https://i.ibb.co/yyGbmfP/zerdecal-soslu-karisik-sebze.jpg"
                        },
                        {
                            "name": "Acı Soslu Patlıcanlı Fettuccine",
                            "caption": "Acı Soslu Patlıcanlı Fettuccine",
                            "price": 1475,
                            "image": "https://i.ibb.co/FXnk68w/aci-soslu-patlicanli-fettucine.jpg"
                        },
                        {
                            "name": "Fırınlanmış Beyaz Nohut",
                            "caption": "Fırınlanmış Beyaz Nohut",
                            "price": 1475,
                            "image": "https://i.ibb.co/64h2X9W/firinlanmis-beyaz-nohut.jpg"
                        },
                        {
                            "name": "Kıymalı Ispanak Oturtma ve Yoğurt",
                            "caption": "Kıymalı Ispanak Oturtma ve Yoğurt",
                            "price": 1475,
                            "image": "https://i.ibb.co/KFtssL2/kiymali-ispanak-oturtma-ve-yogurt.jpg"
                        },
                        {
                            "name": "Kabak Kalye",
                            "caption": "Kabak Kalye",
                            "price": 1475,
                            "image": "https://i.ibb.co/J5cjyNf/kabak-kalye.jpg"
                        },
                        {
                            "name": "Veggie Lazanya",
                            "caption": "Veggie Lazanya",
                            "price": 1475,
                            "image": "https://i.ibb.co/G3dD9X3/veggie-lazanya.jpg"
                        },
                        {
                            "name": "Türlü",
                            "caption": "Türlü",
                            "price": 1475,
                            "image": "https://i.ibb.co/YL82M6x/turlu.jpg"
                        },
                        {
                            "name": "Antep Usulü Karışık Dolma ve Yoğurt",
                            "caption": "Antep Usulü Karışık Dolma ve Yoğurt",
                            "price": 1475,
                            "image": "https://i.ibb.co/ZfzgpZP/antep-usulu-karisik-dolma-ve-yogurt.jpg"
                        },
                        {
                            "name": "Kıymalı Yeşil Mercimek",
                            "caption": "Kıymalı Yeşil Mercimek",
                            "price": 1475,
                            "image": "https://i.ibb.co/tHrKWtz/kiymali-yesil-mercimek.jpg"
                        }
                    ]
                },
                {
                    "name": "Beyaz Et Yemekleri",
                    "caption": "Beyaz Et Yemekleri",
                    "image": "https://i.ibb.co/6H7R5xw/pilic-piccata-ve-fettucine.jpg",
                    "items": [
                        {
                            "name": "Moğol Usulü Sebzeli Tavuklu Erişte",
                            "caption": "Moğol Usulü Sebzeli Tavuklu Erişte",
                            "price": 1745,
                            "image": "https://i.ibb.co/FzS2QyZ/soya-soslu-tavuklu-sebzeli-noodle.jpg"
                        },
                        {
                            "name": "Köri Soslu Mantarlı Tavuk",
                            "caption": "Köri Soslu Mantarlı Tavuk",
                            "price": 1745,
                            "image": "https://i.ibb.co/8YdcJYd/kori-soslu-mantarli-tavuk.jpg"
                        },
                        {
                            "name": "Piliç Piccata ve Fettuccine",
                            "caption": "Piliç Piccata ve Fettuccine",
                            "price": 1475,
                            "image": "https://i.ibb.co/6H7R5xw/pilic-piccata-ve-fettucine.jpg"
                        },
                        {
                            "name": "Fırın Tavuk ve Şehriyeli Pilav",
                            "caption": "Fırın Tavuk ve Şehriyeli Pilav",
                            "price": 1475,
                            "image": "https://i.ibb.co/4Mbx4hB/pilav-ustu-firin-tavuk.jpg"
                        },
                        {
                            "name": "Izgara Tavuk ve Karışık Sebze",
                            "caption": "Izgara Tavuk ve Karışık Sebze",
                            "price": 1475,
                            "image": "https://i.ibb.co/tzGXq6n/izgara-tavuk-ve-karisik-sebze.jpg"
                        },
                        {
                            "name": "Somon Izgara",
                            "caption": "Somon Izgara",
                            "price": 1475,
                            "image": "https://i.ibb.co/Y8JmLyG/somon-izgara.jpg"
                        }
                    ]
                },
                {
                    "name": "Çorba",
                    "caption": "Çorba",
                    "image": "https://i.ibb.co/f4MTJZw/firinlanmis-tereyagli-mercimek-corbasi.jpg",
                    "items": [
                        {
                            "name": "Fırınlanmış Tereyağlı Mercimek Çorbası",
                            "caption": "Fırınlanmış Tereyağlı Mercimek Çorbası",
                            "price": 7,
                            "image": "https://i.ibb.co/f4MTJZw/firinlanmis-tereyagli-mercimek-corbasi.jpg"
                        },
                        {
                            "name": "Naneli Yoğurt Çorbası",
                            "caption": "Naneli Yoğurt Çorbası",
                            "price": 8,
                            "image": "https://i.ibb.co/zZpXWJ9/naneli-yogurt-corbasi.jpg"
                        },
                        {
                            "name": "Sütlü Brokoli Çorbası",
                            "caption": "Sütlü Brokoli Çorbası",
                            "price": 8,
                            "image": "https://i.ibb.co/4TWQQsW/sutlu-brokoli-corbasi.jpg"
                        }
                    ]
                },
                {
                    "name": "Zeytinyağlılar",
                    "caption": "Zeytinyağlılar",
                    "image": "https://i.ibb.co/WnRHSrj/zeytinyagli-brokoli.jpg",
                    "items": [
                        {
                            "name": "Zeytinyağı Soslu Brokoli",
                            "caption": "Zeytinyağı Soslu Brokoli",
                            "price": 1745,
                            "image": "https://i.ibb.co/WnRHSrj/zeytinyagli-brokoli.jpg"
                        },
                        {
                            "name": "Zeytinyağı Soslu Brüksel Lahanası",
                            "caption": "Zeytinyağı Soslu Brüksel Lahanası",
                            "price": 1745,
                            "image": "https://i.ibb.co/XxhY923/zeytinyagli-bruksel-lahanasi.jpg"
                        },
                        {
                            "name": "Zerdeçal Soslu Karışık Sebze (Mini)",
                            "caption": "Zerdeçal Soslu Karışık Sebze (Mini)",
                            "price": 1475,
                            "image": "https://i.ibb.co/KNNVWc0/mini-karisik-sebze.jpg"
                        },
                        {
                            "name": "Balzamik Soslu Buğday Salata (Mini)",
                            "caption": "Balzamik Soslu Buğday Salata (Mini)",
                            "price": 1475,
                            "image": "https://i.ibb.co/hcCG1P7/balzamik-soslu-bugday-salata-mini.jpg"
                        },
                        {
                            "name": "Akdeniz Soslu Mercimek Salata (Mini)",
                            "caption": "Akdeniz Soslu Mercimek Salata (Mini)",
                            "price": 1475,
                            "image": "https://i.ibb.co/5vrqg5L/akdeniz-soslu-mercimek-salata-mini.jpg"
                        },
                        {
                            "name": "Soslu Izgara Sebze",
                            "caption": "Soslu Izgara Sebze",
                            "price": 1475,
                            "image": "https://i.ibb.co/VJxHCYL/soslu-izgara-sebze.jpg"
                        }
                    ]
                },
                {
                    "name": "Salata",
                    "caption": "Salata",
                    "image": "https://i.ibb.co/ZX9vkQ5/venedik-soslu-kinoa-salatasi.jpg",
                    "items": [
                        {
                            "name": "Venedik Soslu Kinoalı Yeşil Salata",
                            "caption": "Venedik Soslu Kinoalı Yeşil Salata",
                            "price": 1145,
                            "image": "https://i.ibb.co/ZX9vkQ5/venedik-soslu-kinoa-salatasi.jpg"
                        },
                        {
                            "name": "Thai Salata",
                            "caption": "Thai Salata",
                            "price": 1145,
                            "image": "https://i.ibb.co/jJ1SCKX/thai-salata.jpg"
                        },
                        {
                            "name": "Pancar Salata",
                            "caption": "Pancar Salata",
                            "price": 1145,
                            "image": "https://i.ibb.co/JyBFK79/pancar-salata.jpg"
                        }
                    ]
                },
                {
                    "name": "Yan Lezzetler",
                    "caption": "Yan Lezzetler",
                    "image": "https://i.ibb.co/YX0qKKb/etli-yaprak-sarma-ve-yogurt.jpg",
                    "items": [
                        {
                            "name": "Nohutlu Pirinç Pilavı",
                            "caption": "Nohutlu Pirinç Pilavı",
                            "price": 495,
                            "image": "https://i.ibb.co/HCgPVt3/nohutlu-sehriyeli-pirinc-pilavi.jpg"
                        },
                        {
                            "name": "Domatesli Bulgur Pilavı",
                            "caption": "Domatesli Bulgur Pilavı",
                            "price": 495,
                            "image": "https://i.ibb.co/3zXwNNz/domatesli-bulgur-pilavi.jpg"
                        },
                        {
                            "name": "Kaşarlı Patates Püresi",
                            "caption": "Kaşarlı Patates Püresi",
                            "price": 495,
                            "image": "https://i.ibb.co/JmV9qkX/kasarli-patates-puresi.jpg"
                        },
                        {
                            "name": "Mini İçli Köfte",
                            "caption": "Mini İçli Köfte",
                            "price": 645,
                            "image": "https://i.ibb.co/G7VJP3g/mini-icli-kofte.jpg"
                        },
                        {
                            "name": "Kadınbudu Köfte",
                            "caption": "Kadınbudu Köfte",
                            "price": 645,
                            "image": "https://i.ibb.co/fSLJ02r/kadinbudu-kofte.jpg"
                        },
                        {
                            "name": "İnce Kıyım Şakşuka",
                            "caption": "İnce Kıyım Şakşuka",
                            "price": 645,
                            "image": "https://i.ibb.co/9nZN0X6/ince-kiyim-saksuka.jpg"
                        },
                        {
                            "name": "Barbunya Pilaki",
                            "caption": "Barbunya Pilaki",
                            "price": 495,
                            "image": "https://i.ibb.co/2gkyxbz/barbunya-pilaki.jpg"
                        },
                        {
                            "name": "Tereyağlı Cevizli Erişte",
                            "caption": "Tereyağlı Cevizli Erişte",
                            "price": 495,
                            "image": "https://i.ibb.co/wCYwc3K/tereyagli-cevizli-eriste.jpg"
                        },
                        {
                            "name": "Baharatlı Fırın Patates",
                            "caption": "Baharatlı Fırın Patates",
                            "price": 495,
                            "image": "https://i.ibb.co/C0n8qs5/baharatli-firin-patates.jpg"
                        }
                    ]
                },
                {
                    "name": "Tatlı",
                    "caption": "Tatlı",
                    "image": "https://i.ibb.co/mRFZPhD/cekoslavak-gunesi.jpg",
                    "items": [
                        {
                            "name": "Çekoslovak Güneşi",
                            "caption": "Çekoslovak Güneşi",
                            "price": 745,
                            "image": "https://i.ibb.co/mRFZPhD/cekoslavak-gunesi.jpg"
                        },
                        {
                            "name": "Siyah İnci",
                            "caption": "Siyah İnci",
                            "price": 745,
                            "image": "https://i.ibb.co/bJvNsWT/siyah-inci-dilim.jpg"
                        },
                        {
                            "name": "Çikolatalı Sufle",
                            "caption": "Çikolatalı Sufle",
                            "price": 775,
                            "image": "https://i.ibb.co/7kRsjhw/cikolatali-sufle.jpg"
                        },
                        {
                            "name": "Kuş Sütü",
                            "caption": "Kuş Sütü",
                            "price": 875,
                            "image": "https://i.ibb.co/w41Vsn0/kus-sutu.jpg"
                        },
                        {
                            "name": "Frambuazlı Cheesecake",
                            "caption": "Frambuazlı Cheesecake",
                            "price": 675,
                            "image": "https://i.ibb.co/0qWzBMc/frambuazli-cheesecake.jpg"
                        },
                        {
                            "name": "Çikolatalı Brownie",
                            "caption": "Çikolatalı Brownie",
                            "price": 875,
                            "image": "https://i.ibb.co/hH0cxXf/cikolatali-brownie.jpg"
                        },
                        {
                            "name": "İrmik Helvası",
                            "caption": "İrmik Helvası",
                            "price": 775,
                            "image": "https://i.ibb.co/FYJzPbD/irmik-helvasi.jpg"
                        }
                    ]
                },
                {
                    "name": "Gazsız İçecekler",
                    "caption": "Gazsız İçecekler",
                    "image": "https://i.ibb.co/0hrFJ98/damla-su.jpg",
                    "items": [
                        {
                            "name": "Cappy Portakal Suyu",
                            "caption": "Cappy Portakal Suyu",
                            "price": 385,
                            "image": "https://i.ibb.co/bHKk2XB/cappy-portakal-suyu.jpg"
                        },
                        {
                            "name": "Cappy Şeftali",
                            "caption": "Cappy Şeftali",
                            "price": 385,
                            "image": "https://i.ibb.co/vQ1z9Rt/cappy-seftali.jpg"
                        },
                        {
                            "name": "Cappy Vişne Suyu",
                            "caption": "Cappy Vişne Suyu",
                            "price": 385,
                            "image": "https://i.ibb.co/7VgxVdN/cappy-visne-suyu.jpg"
                        },
                        {
                            "name": "Sütaş Ayran",
                            "caption": "Sütaş Ayran",
                            "price": 245,
                            "image": "https://i.ibb.co/4NymQCs/sutas-ayran-300ml.jpg"
                        },
                        {
                            "name": "Illy Latte Macchiato",
                            "caption": "Illy Latte Macchiato",
                            "price": 545,
                            "image": "https://i.ibb.co/CHF7r6G/illy-latte-macchiato-pet-250ml.jpg"
                        },
                        {
                            "name": "Illy Caffe Macchiato",
                            "caption": "Illy Caffe Macchiato",
                            "price": 545,
                            "image": "https://i.ibb.co/N7zSyvc/illy-caffe-macchiato-pet-250ml.jpg"
                        },
                        {
                            "name": "Fuse Tea Limon Kutu",
                            "caption": "Fuse Tea Limon Kutu",
                            "price": 385,
                            "image": "https://i.ibb.co/gV0d1KK/fuse-tea-limon-kutu.jpg"
                        },
                        {
                            "name": "Fuse Tea Şeftali Kutu",
                            "caption": "Fuse Tea Şeftali Kutu",
                            "price": 385,
                            "image": "https://i.ibb.co/FzD3grH/fuse-tea-seftali.jpg"
                        },
                        {
                            "name": "Soya Sütü Sade",
                            "caption": "Soya Sütü Sade",
                            "price": 585,
                            "image": "https://i.ibb.co/ngFCNYX/alpro-soya-sutu-sade.jpg"
                        },
                        {
                            "name": "Soya Sütü Çilekli",
                            "caption": "Soya Sütü Çilekli",
                            "price": 585,
                            "image": "https://i.ibb.co/Ks4TNbz/alpro-soya-sutu-cilekli.jpg"
                        },
                        {
                            "name": "Soya Sütü Çikolatalı",
                            "caption": "Soya Sütü Çikolatalı",
                            "price": 585,
                            "image": "https://i.ibb.co/G7g3gGz/alpro-soya-sutu-cikolatali.jpg"
                        },
                        {
                            "name": "Elmalı&Tarçınlı Demlendirilmiş Su",
                            "caption": "Elmalı&Tarçınlı Demlendirilmiş Su",
                            "price": 585,
                            "image": "https://i.ibb.co/rdSLWYx/found-elmaliandtarcinli-demlendirilmis-su.jpg"
                        },
                        {
                            "name": "Naneli&Salatalıklı Demlendirilmiş Su",
                            "caption": "Naneli&Salatalıklı Demlendirilmiş Su",
                            "price": 585,
                            "image": "https://i.ibb.co/pzvxWGG/found-naneliandsalatalikli-demlendirilmis-su.jpg"
                        },
                        {
                            "name": "Limonlu Demlendirilmiş Su",
                            "caption": "Limonlu Demlendirilmiş Su",
                            "price": 585,
                            "image": "https://i.ibb.co/JdrN16x/found-limonlu-demlendirilmis-su-330ml.jpg"
                        },
                        {
                            "name": "Mürver Çiçekli Demlendirilmiş Su",
                            "caption": "Mürver Çiçekli Demlendirilmiş Su",
                            "price": 585,
                            "image": "https://i.ibb.co/JvhR6N4/found-murver-cicekli-demlendirilmis-su-330ml.jpg"
                        },
                        {
                            "name": "Enjoy Smoothie Çilek&Muz",
                            "caption": "Enjoy Smoothie Çilek&Muz",
                            "price": 745,
                            "image": "https://i.ibb.co/cQNGjvG/enjoy-smoothie-cilekandmuz-250ml.jpg"
                        },
                        {
                            "name": "Enjoy Smoothie Mango&Passion Fruit",
                            "caption": "Enjoy Smoothie Mango&Passion Fruit",
                            "price": 745,
                            "image": "https://i.ibb.co/X4kB9gC/enjoy-smoothie-mangoandpassion-fruit.jpg"
                        },
                        {
                            "name": "Enjoy Sıkma Portakal Suyu",
                            "caption": "Enjoy Sıkma Portakal Suyu",
                            "price": 585,
                            "image": "https://i.ibb.co/GVnYq1b/enjoy-sikma-portakal-suyu.jpg"
                        },
                        {
                            "name": "Fuse Tea Limon Cam Şişe",
                            "caption": "Fuse Tea Limon Cam Şişe",
                            "price": 385,
                            "image": "https://i.ibb.co/VJzRpcT/fuse-tea-limon-cam-sise-250ml.jpg"
                        },
                        {
                            "name": "Fuse Tea Şeftali Cam Şişe",
                            "caption": "Fuse Tea Şeftali Cam Şişe",
                            "price": 385,
                            "image": "https://i.ibb.co/M7fVq5s/fuse-tea-seftali-cam-sise-250ml.jpg"
                        },
                        {
                            "name": "Cappy Şeftali Suyu Cam Şişe",
                            "caption": "Cappy Şeftali Suyu Cam Şişe",
                            "price": 385,
                            "image": "https://i.ibb.co/Hg1KDzV/cappy-seftali-suyu-cam-sise-250ml.jpg"
                        },
                        {
                            "name": "Cappy Portakal Suyu Cam Şişe",
                            "caption": "Cappy Portakal Suyu Cam Şişe",
                            "price": 385,
                            "image": "https://i.ibb.co/ZJ49Tpq/cappy-portakal-suyu-cam-sise-250ml.jpg"
                        },
                        {
                            "name": "Cappy Vişne Suyu Cam Şişe",
                            "caption": "Cappy Vişne Suyu Cam Şişe",
                            "price": 385,
                            "image": "https://i.ibb.co/SRyNVWv/cappy-visne-suyu-cam-sise-250ml.jpg"

                        }
                    ]
                },
                {
                    "name": "Gazlı İçecek",
                    "caption": "Gazlı İçecek",
                    "image": "https://i.ibb.co/DQtZtjm/coca-cola-kutu-330ml.jpg",
                    "items": [
                        {
                            "name": "Coca-Cola Kutu",
                            "caption": "Coca-Cola Kutu",
                            "price": 1745,
                            "image": "https://i.ibb.co/DQtZtjm/coca-cola-kutu-330ml.jpg"
                        },
                        {
                            "name": "Coca-Cola Light Kutu",
                            "caption": "Coca-Cola Light Kutu",
                            "price": 1745,
                            "image": "https://i.ibb.co/N6wz7mT/coca-cola-light-kutu.jpg"
                        },
                        {
                            "name": "Coca-Cola Zero Kutu",
                            "caption": "Coca-Cola Zero Kutu",
                            "price": 1475,
                            "image": "https://i.ibb.co/5YMb55G/coca-cola-zero-kutu.jpg"
                        },
                        {
                            "name": "Fanta Portakal Kutu",
                            "caption": "Fanta",
                            "price": 1475,
                            "image": "https://i.ibb.co/FqJNGhp/fanta-portakal-kutu.jpg"
                        },
                        {
                            "name": "Sprite Kutu",
                            "caption": "Sprite",
                            "price": 1475,
                            "image": "https://i.ibb.co/1qXz7sY/sprite-kutu.jpg"
                        },
                        {
                            "name": "Guarana Antarctica Gazlı İçecek",
                            "caption": "Guarana Antarctica Gazlı İçecek",
                            "price": 1475,
                            "image": "https://i.ibb.co/6bwHfhb/guarana-antarctica-gazli-icecek.jpg"
                        },
                        {
                            "name": "Coca-Cola Light Cam Şişe",
                            "caption": "Coca-Cola Light Cam Şişe",
                            "price": 1475,
                            "image": "https://i.ibb.co/jvhjKvs/coca-cola-light-cam-sise.jpg"
                        },
                        {
                            "name": "Coca-Cola Cam Şişe",
                            "caption": "Coca-Cola Cam Şişe",
                            "price": 1475,
                            "image": "https://i.ibb.co/GQXKbqV/coca-cola-cam-sise.jpg"
                        },
                        {
                            "name": "Coca-Cola Zero Cam Şişe",
                            "caption": "Coca-Cola Zero Cam Şişe",
                            "price": 1475,
                            "image": "https://i.ibb.co/PjXJXnk/coca-cola-zero-cam-sise.jpg"
                        }
                    ]
                }
            ]
        },
        {
            "key": "kirmizi-et-ana-yemekler",
            "description": "Ana Yemeğinizi Seçin",
            "orderTag": "Kırmızı Et - Ana Lezzetler",
            "items": [
                {
                    "name": "Hünkarbeğendi",
                    "image": "https://i.ibb.co/yX11mcW/hunkar-begendi.jpg",
                    "price": 27
                },
                {
                    "name": "Domates Soslu İsveç Köfte",
                    "image": "https://i.ibb.co/n1Qs3bv/isvec-kofte.jpg"
                },
                {
                    "name": "Patates Püresi Yatağında Köfte",
                    "image": "https://i.ibb.co/KWycR9L/patates-puresi-yataginda-kofte.jpg"
                },
                {
                    "name": "Beğendi Yatağında Köfte",
                    "image": "https://i.ibb.co/ZBLR09H/begendi-yataginda-kofte.jpg"
                },
                {
                    "name": "Izgara Köfte ve Karışık Sebze",
                    "image": "https://i.ibb.co/RTZYv0q/izgara-kofte-ve-karisik-sebze.jpg"
                },
                {
                    "name": "Orman Kebabı",
                    "image": "https://i.ibb.co/ZJcvtK4/orman-kebabi.jpg"
                },
                {
                    "name": "Dana Kavurma ve Şehriyeli Pilav",
                    "image": "https://i.ibb.co/Hpv2NQL/dana-kavurma-ve-sehriyeli-pilav.jpg",
                    "price": 72
                }
            ]
        },
        {
            "key": "beyaz-et-ana-yemekler",
            "description": "Ana Yemeğinizi Seçin",
            "orderTag": "Beyaz Et - Ana Lezzetler",
            "items": [
                {
                    "name": "Moğol Usulü Sebzeli Tavuklu Erişte",
                    "image": "https://i.ibb.co/FzS2QyZ/soya-soslu-tavuklu-sebzeli-noodle.jpg",
                    "price": 27
                },
                {
                    "name": "Köri Soslu Mantarlı Tavuk",
                    "image": "https://i.ibb.co/8YdcJYd/kori-soslu-mantarli-tavuk.jpg"
                },
                {
                    "name": "Piliç Piccata ve Fettuccine",
                    "image": "https://i.ibb.co/6H7R5xw/pilic-piccata-ve-fettucine.jpg"
                },
                {
                    "name": "Fırın Tavuk ve Şehriyeli Pilav",
                    "image": "https://i.ibb.co/4Mbx4hB/pilav-ustu-firin-tavuk.jpg"
                },
                {
                    "name": "Izgara Tavuk ve Karışık Sebze",
                    "image": "https://i.ibb.co/tzGXq6n/izgara-tavuk-ve-karisik-sebze.jpg"
                },
                {
                    "name": "Somon Izgara",
                    "image": "https://i.ibb.co/Y8JmLyG/somon-izgara.jpg"
                }
            ]
        },
        {
            "key": "sebzeli-etli-indirimli-menu-ana-yemekler",
            "description": "Ana Yemeğinizi Seçin",
            "orderTag": "Sebzeli Etli Menü - Ana Lezzetler",
            "items": [
                {
                    "name": "Etli Asma Yaprağı Sarma ve Yoğurt",
                    "caption": "Etli Asma Yaprağı Sarma ve Yoğurt",
                    "image": "https://i.ibb.co/YX0qKKb/etli-yaprak-sarma-ve-yogurt.jpg"
                },
                {
                    "name": "Zerdeçal Soslu Karışık Sebze",
                    "caption": "Zerdeçal Soslu Karışık Sebze",
                    "price": 1,
                    "image": "https://i.ibb.co/yyGbmfP/zerdecal-soslu-karisik-sebze.jpg"
                },
                {
                    "name": "Acı Soslu Patlıcanlı Fettuccine",
                    "caption": "Acı Soslu Patlıcanlı Fettuccine",
                    "price": 175,
                    "image": "https://i.ibb.co/FXnk68w/aci-soslu-patlicanli-fettucine.jpg"
                },
                {
                    "name": "Fırınlanmış Beyaz Nohut",
                    "caption": "Fırınlanmış Beyaz Nohut",
                    "image": "https://i.ibb.co/64h2X9W/firinlanmis-beyaz-nohut.jpg"
                },
                {
                    "name": "Kıymalı Ispanak Oturtma ve Yoğurt",
                    "caption": "Kıymalı Ispanak Oturtma ve Yoğurt",
                    "image": "https://i.ibb.co/KFtssL2/kiymali-ispanak-oturtma-ve-yogurt.jpg"
                },
                {
                    "name": "Kabak Kalye",
                    "caption": "Kabak Kalye",
                    "image": "https://i.ibb.co/J5cjyNf/kabak-kalye.jpg"
                },
                {
                    "name": "Veggie Lazanya",
                    "caption": "Veggie Lazanya",
                    "price": 2,
                    "image": "https://i.ibb.co/G3dD9X3/veggie-lazanya.jpg"
                },
                {
                    "name": "Türlü",
                    "caption": "Türlü",
                    "image": "https://i.ibb.co/YL82M6x/turlu.jpg"
                },
                {
                    "name": "Antep Usulü Karışık Dolma ve Yoğurt",
                    "caption": "Antep Usulü Karışık Dolma ve Yoğurt",
                    "price": 325,
                    "image": "https://i.ibb.co/ZfzgpZP/antep-usulu-karisik-dolma-ve-yogurt.jpg"
                },
                {
                    "name": "Kıymalı Yeşil Mercimek",
                    "caption": "Kıymalı Yeşil Mercimek",
                    "image": "https://i.ibb.co/tHrKWtz/kiymali-yesil-mercimek.jpg"
                }
            ]
        },
        {
            "key": "diyet-indirimli-menu-ana-yemekler",
            "description": "Ana Yemeğinizi Seçin",
            "orderTag": "Diyet Menu - Ana Lezzetler",
            "items": [
                {
                    "name": "Kıymalı Ispanak Oturtma ve Yoğurt",
                    "caption": "Kıymalı Ispanak Oturtma ve Yoğurt",
                    "image": "https://i.ibb.co/KFtssL2/kiymali-ispanak-oturtma-ve-yogurt.jpg"
                },
                {
                    "name": "Zerdeçal Soslu Karışık Sebze",
                    "caption": "Zerdeçal Soslu Karışık Sebze",
                    "price": 1,
                    "image": "https://i.ibb.co/yyGbmfP/zerdecal-soslu-karisik-sebze.jpg"
                },
                {
                    "name": "Venedik Soslu Kinoalı Yeşil Salata",
                    "caption": "Venedik Soslu Kinoalı Yeşil Salata",
                    "price": 175,
                    "image": "https://i.ibb.co/ZX9vkQ5/venedik-soslu-kinoa-salatasi.jpg"
                },
                {
                    "name": "Thai Salata",
                    "caption": "Thai Salata",
                    "image": "https://i.ibb.co/jJ1SCKX/thai-salata.jpg"
                },
                {
                    "name": "Pancar Salata",
                    "caption": "Pancar Salata",
                    "image": "https://i.ibb.co/JyBFK79/pancar-salata.jpg"
                },
                {
                    "name": "Türlü",
                    "caption": "Türlü",
                    "image": "https://i.ibb.co/YL82M6x/turlu.jpg"
                },
                {
                    "name": "Fırınlanmış Beyaz Nohut",
                    "caption": "Fırınlanmış Beyaz Nohut",
                    "price": 2,
                    "image": "https://i.ibb.co/64h2X9W/firinlanmis-beyaz-nohut.jpg"
                },
                {
                    "name": "Izgara Tavuk ve Karışık Sebze",
                    "caption": "Izgara Tavuk ve Karışık Sebze",
                    "image": "https://i.ibb.co/tzGXq6n/izgara-tavuk-ve-karisik-sebze.jpg"
                },
                {
                    "name": "Kıymalı Yeşil Mercimek",
                    "caption": "Kıymalı Yeşil Mercimek",
                    "price": 325,
                    "image": "https://i.ibb.co/tHrKWtz/kiymali-yesil-mercimek.jpg"
                },
                {
                    "name": "Orman Kebabı",
                    "caption": "Orman Kebabı",
                    "image": "https://i.ibb.co/ZJcvtK4/orman-kebabi.jpg"
                }
            ]
        },
        {
            "key": "vejeteryan-indirimli-menu-ana-yemekler",
            "description": "Ana Yemeğinizi Seçin",
            "orderTag": "Vejeteryan Menü - Ana Lezzetler",
            "items": [
                {
                    "name": "Kabak Kalye",
                    "caption": "Kabak Kalye",
                    "image": "https://i.ibb.co/J5cjyNf/kabak-kalye.jpg"
                },
                {
                    "name": "Acı Soslu Patlıcanlı Fettuccine",
                    "caption": "Acı Soslu Patlıcanlı Fettuccine",
                    "price": 1,
                    "image": "https://i.ibb.co/FXnk68w/aci-soslu-patlicanli-fettucine.jpg"
                },
                {
                    "name": "Zerdeçal Soslu Karışık Sebze",
                    "caption": "Zerdeçal Soslu Karışık Sebze",
                    "price": 175,
                    "image": "https://i.ibb.co/yyGbmfP/zerdecal-soslu-karisik-sebze.jpg"
                },
                {
                    "name": "Thai Salata",
                    "caption": "Thai Salata",
                    "image": "https://i.ibb.co/jJ1SCKX/thai-salata.jpg"
                },
                {
                    "name": "Pancar Salata",
                    "caption": "Pancar Salata",
                    "image": "https://i.ibb.co/JyBFK79/pancar-salata.jpg"
                },
                {
                    "name": "Türlü",
                    "caption": "Türlü",
                    "image": "https://i.ibb.co/YL82M6x/turlu.jpg"
                },
                {
                    "name": "Fırınlanmış Beyaz Nohut",
                    "caption": "Fırınlanmış Beyaz Nohut",
                    "price": 2,
                    "image": "https://i.ibb.co/64h2X9W/firinlanmis-beyaz-nohut.jpg"
                },
                {
                    "name": "Izgara Tavuk ve Karışık Sebze",
                    "caption": "Izgara Tavuk ve Karışık Sebze",
                    "image": "https://i.ibb.co/tzGXq6n/izgara-tavuk-ve-karisik-sebze.jpg"
                },
                {
                    "name": "Kıymalı Yeşil Mercimek",
                    "caption": "Kıymalı Yeşil Mercimek",
                    "price": 325,
                    "image": "https://i.ibb.co/tHrKWtz/kiymali-yesil-mercimek.jpg"
                },
                {
                    "name": "Orman Kebabı",
                    "caption": "Orman Kebabı",
                    "image": "https://i.ibb.co/ZJcvtK4/orman-kebabi.jpg"
                },
                {
                    "name": "Zerdeçal Soslu Karışık Sebze",
                    "caption": "Zerdeçal Soslu Karışık Sebze",
                    "image": "https://i.ibb.co/yyGbmfP/zerdecal-soslu-karisik-sebze.jpg"
                }
            ]
        },
        {
            "key": "cocacola-indirimli-menu-ana-yemekler",
            "description": "Ana Yemeğinizi Seçin",
            "orderTag": "Coca Cola Menü - Ana Lezzetler",
            "items": [
                {
                    "name": "Orman Kebabı",
                    "caption": "Orman Kebabı",
                    "image": "https://i.ibb.co/ZJcvtK4/orman-kebabi.jpg"
                },
                {
                    "name": "Beğendi Yatağında Köfte",
                    "caption": "Beğendi Yatağında Köfte",
                    "price": 1,
                    "image": "https://i.ibb.co/ZBLR09H/begendi-yataginda-kofte.jpg"
                },
                {
                    "name": "Patates Püresi Yatağında Köfte",
                    "caption": "Patates Püresi Yatağında Köfte",
                    "price": 175,
                    "image": "https://i.ibb.co/KWycR9L/patates-puresi-yataginda-kofte.jpg"
                },
                {
                    "name": "Izgara Köfte ve Karışık Sebze",
                    "caption": "Izgara Köfte ve Karışık Sebze",
                    "image": "https://i.ibb.co/RTZYv0q/izgara-kofte-ve-karisik-sebze.jpg"
                },
                {
                    "name": "Dana Kavurma ve Şehriyeli Pilav",
                    "caption": "Dana Kavurma ve Şehriyeli Pilav",
                    "image": "https://i.ibb.co/Hpv2NQL/dana-kavurma-ve-sehriyeli-pilav.jpg"
                },
                {
                    "name": "Izgara Tavuk ve Karışık Sebze",
                    "caption": "Izgara Tavuk ve Karışık Sebze",
                    "image": "https://i.ibb.co/tzGXq6n/izgara-tavuk-ve-karisik-sebze.jpg"
                },
                {
                    "name": "Fırın Tavuk ve Şehriyeli Pilav",
                    "caption": "Fırın Tavuk ve Şehriyeli Pilav",
                    "price": 2,
                    "image": "https://i.ibb.co/4Mbx4hB/pilav-ustu-firin-tavuk.jpg"
                },
                {
                    "name": "Moğol Usulü Sebzeli Tavuklu Erişte",
                    "caption": "Moğol Usulü Sebzeli Tavuklu Erişte",
                    "image": "https://i.ibb.co/FzS2QyZ/soya-soslu-tavuklu-sebzeli-noodle.jpg"
                },
                {
                    "name": "Piliç Piccata ve Fettuccine",
                    "caption": "Piliç Piccata ve Fettuccine",
                    "price": 325,
                    "image": "https://i.ibb.co/6H7R5xw/pilic-piccata-ve-fettucine.jpg"
                },
                {
                    "name": "Etli Asma Yaprağı Sarma ve Yoğurt",
                    "caption": "Etli Asma Yaprağı Sarma ve Yoğurt",
                    "image": "https://i.ibb.co/YX0qKKb/etli-yaprak-sarma-ve-yogurt.jpg"
                },
                {
                    "name": "Türlü",
                    "caption": "Türlü",
                    "image": "https://i.ibb.co/YL82M6x/turlu.jpg"
                },
                {
                    "name": "Zerdeçal Soslu Karışık Sebze",
                    "caption": "Zerdeçal Soslu Karışık Sebze",
                    "image": "https://i.ibb.co/yyGbmfP/zerdecal-soslu-karisik-sebze.jpg"
                },
                {
                    "name": "Domates Soslu İsveç Köfte",
                    "caption": "Domates Soslu İsveç Köfte",
                    "image": "https://i.ibb.co/n1Qs3bv/isvec-kofte.jpg"
                },
                {
                    "name": "Hünkarbeğendi",
                    "caption": "Hünkarbeğendi",
                    "image": "https://i.ibb.co/yX11mcW/hunkar-begendi.jpg"
                },
                {
                    "name": "Veggie Lazanya",
                    "caption": "Veggie Lazanya",
                    "image": "https://i.ibb.co/G3dD9X3/veggie-lazanya.jpg"
                },
                {
                    "name": "Köri Soslu Mantarlı Tavuk",
                    "caption": "Köri Soslu Mantarlı Tavuk",
                    "image": "https://i.ibb.co/8YdcJYd/kori-soslu-mantarli-tavuk.jpg"
                },
                {
                    "name": "Kıymalı Yeşil Mercimek",
                    "caption": "Kıymalı Yeşil Mercimek",
                    "image": "https://i.ibb.co/tHrKWtz/kiymali-yesil-mercimek.jpg"
                },
                {
                    "name": "Acı Soslu Patlıcanlı Fettuccine",
                    "caption": "Acı Soslu Patlıcanlı Fettuccine",
                    "image": "https://i.ibb.co/FXnk68w/aci-soslu-patlicanli-fettucine.jpg"
                },
                {
                    "name": "Fırınlanmış Beyaz Nohut",
                    "caption": "Fırınlanmış Beyaz Nohut",
                    "image": "https://i.ibb.co/64h2X9W/firinlanmis-beyaz-nohut.jpg"
                },
                {
                    "name": "Kıymalı Ispanak Oturtma ve Yoğurt",
                    "caption": "Kıymalı Ispanak Oturtma ve Yoğurt",
                    "image": "https://i.ibb.co/KFtssL2/kiymali-ispanak-oturtma-ve-yogurt.jpg"
                },
                {
                    "name": "Somon Izgara",
                    "caption": "Somon Izgara",
                    "image": "https://i.ibb.co/Y8JmLyG/somon-izgara.jpg"
                },
                {
                    "name": "Antep Usulü Karışık Dolma ve Yoğurt",
                    "caption": "Antep Usulü Karışık Dolma ve Yoğurt",
                    "image": "https://i.ibb.co/ZfzgpZP/antep-usulu-karisik-dolma-ve-yogurt.jpg"
                }
            ]
        },
        {
            "key": "indirimli-menu-yan-lezzetler-1",
            "description": "1. Yan Lezzetinizi Seçin",
            "orderTag": "Menü Yan Lezzetler",
            "items": [
                {
                    "name": "Nohutlu Pirinç Pilavı",
                    "image": "https://i.ibb.co/HCgPVt3/nohutlu-sehriyeli-pirinc-pilavi.jpg"
                },
                {
                    "name": "Domatesli Bulgur Pilavı",
                    "image": "https://i.ibb.co/3zXwNNz/domatesli-bulgur-pilavi.jpg"
                },
                {
                    "name": "Kaşarlı Patates Püresi",
                    "image": "https://i.ibb.co/JmV9qkX/kasarli-patates-puresi.jpg"
                },
                {
                    "name": "Mini İçli Köfte",
                    "image": "https://i.ibb.co/G7VJP3g/mini-icli-kofte.jpg"
                },
                {
                    "name": "Kadınbudu Köfte",
                    "image": "https://i.ibb.co/fSLJ02r/kadinbudu-kofte.jpg"
                },
                {
                    "name": "İnce Kıyım Şakşuka",
                    "image": "https://i.ibb.co/9nZN0X6/ince-kiyim-saksuka.jpg"
                },
                {
                    "name": "Barbunya Pilaki",
                    "image": "https://i.ibb.co/2gkyxbz/barbunya-pilaki.jpg"
                },
                {
                    "name": "Tereyağlı Cevizli Erişte",
                    "image": "https://i.ibb.co/wCYwc3K/tereyagli-cevizli-eriste.jpg"
                },
                {
                    "name": "Baharatlı Fırın Patates",
                    "image": "https://i.ibb.co/C0n8qs5/baharatli-firin-patates.jpg"
                }
            ]
        },
        {
            "key": "indirimli-menu-yan-lezzetler-2",
            "description": "2. Yan Lezzetinizi Seçin",
            "orderTag": "Menü Yan Lezzetler",
            "items": [
                {
                    "name": "Nohutlu Pirinç Pilavı",
                    "image": "https://i.ibb.co/HCgPVt3/nohutlu-sehriyeli-pirinc-pilavi.jpg"
                },
                {
                    "name": "Domatesli Bulgur Pilavı",
                    "image": "https://i.ibb.co/3zXwNNz/domatesli-bulgur-pilavi.jpg"
                },
                {
                    "name": "Kaşarlı Patates Püresi",
                    "image": "https://i.ibb.co/JmV9qkX/kasarli-patates-puresi.jpg"
                },
                {
                    "name": "Mini İçli Köfte",
                    "image": "https://i.ibb.co/G7VJP3g/mini-icli-kofte.jpg"
                },
                {
                    "name": "Kadınbudu Köfte",
                    "image": "https://i.ibb.co/fSLJ02r/kadinbudu-kofte.jpg"
                },
                {
                    "name": "İnce Kıyım Şakşuka",
                    "image": "https://i.ibb.co/9nZN0X6/ince-kiyim-saksuka.jpg"
                },
                {
                    "name": "Barbunya Pilaki",
                    "image": "https://i.ibb.co/2gkyxbz/barbunya-pilaki.jpg"
                },
                {
                    "name": "Tereyağlı Cevizli Erişte",
                    "image": "https://i.ibb.co/wCYwc3K/tereyagli-cevizli-eriste.jpg"
                },
                {
                    "name": "Baharatlı Fırın Patates",
                    "image": "https://i.ibb.co/C0n8qs5/baharatli-firin-patates.jpg"
                }
            ]
        },
        {
            "key": "indirimli-menu-tatli",
            "description": "Dilerseniz ilave Tatlı alabilirsiniz.",
            "items": [
                {
                    "name": "Çekoslovak Güneşi",
                    "image": "https://i.ibb.co/mRFZPhD/cekoslavak-gunesi.jpg",
                    "price": 72
                },
                {
                    "name": "Siyah İnci",
                    "image": "https://i.ibb.co/bJvNsWT/siyah-inci-dilim.jpg",
                    "price": 72
                },
                {
                    "name": "Çikolatalı Sufle",
                    "image": "https://i.ibb.co/7kRsjhw/cikolatali-sufle.jpg",
                    "price": 72
                },
                {
                    "name": "Kuş Sütü",
                    "image": "https://i.ibb.co/w41Vsn0/kus-sutu.jpg",
                    "price": 72
                },
                {
                    "name": "Frambuazlı Cheesecake",
                    "image": "https://i.ibb.co/0qWzBMc/frambuazli-cheesecake.jpg",
                    "price": 72
                },
                {
                    "name": "Çikolatalı Brownie",
                    "image": "https://i.ibb.co/hH0cxXf/cikolatali-brownie.jpg",
                    "price": 72
                },
                {
                    "name": "İrmik Helvası",
                    "image": "https://i.ibb.co/FYJzPbD/irmik-helvasi.jpg",
                    "price": 72
                },
                {
                    "name": null,
                    "caption": "Tatlı İstemiyorum",
                    "image": "https://i.ibb.co/tZSb64N/istemiyorum.jpg",
                    "price": 72
                }
            ]
        },
        {
            "key": "indirimli-menu-icecek",
            "description": "Dilerseniz Menünüze İçecek Ekleyebilirsiniz.",
            "items": [
                {
                    "name": "Coca-Cola Kutu",
                    "image": "https://i.ibb.co/DQtZtjm/coca-cola-kutu-330ml.jpg",
                    "items": [
                        {
                            "name": "Coca-Cola Kutu",
                            "image": "https://i.ibb.co/DQtZtjm/coca-cola-kutu-330ml.jpg",
                            "price": 3
                        },
                        {
                            "name": "Coca-Cola Light Kutu",
                            "image": "https://i.ibb.co/N6wz7mT/coca-cola-light-kutu.jpg",
                            "price": 3
                        },
                        {
                            "name": "Coca-Cola Zero Kutu",
                            "image": "https://i.ibb.co/5YMb55G/coca-cola-zero-kutu.jpg",
                            "price": 3
                        },
                        {
                            "name": "Coca-Cola Cam Şişe",
                            "image": "https://i.ibb.co/GQXKbqV/coca-cola-cam-sise.jpg"
                        },
                        {
                            "name": "Coca-Cola Light Cam Şişe",
                            "image": "https://i.ibb.co/jvhjKvs/coca-cola-light-cam-sise.jpg"
                        },
                        {
                            "name": "Coca-Cola Zero Cam Şişe",
                            "image": "https://i.ibb.co/PjXJXnk/coca-cola-zero-cam-sise.jpg"
                        }
                    ]
                },
                {
                    "name": "Fanta Portakal Kutu",
                    "caption": "Fanta",
                    "image": "https://i.ibb.co/FqJNGhp/fanta-portakal-kutu.jpg",
                    "price": 3
                },
                {
                    "name": "Sprite Kutu",
                    "caption": "Sprite",
                    "image": "https://i.ibb.co/1qXz7sY/sprite-kutu.jpg",
                    "price": 3
                },
                {
                    "name": "Guarana Antarctica Gazlı İçecek",
                    "image": "https://i.ibb.co/6bwHfhb/guarana-antarctica-gazli-icecek.jpg",
                    "price": 5
                },
                {
                    "name": "Damla Su",
                    "image": "https://i.ibb.co/0hrFJ98/damla-su.jpg",
                    "price": 1
                }
            ]
        }
    ]
};

export default data;