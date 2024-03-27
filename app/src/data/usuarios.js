let sample_usuarios = [{"nombre":"Craig","apPat":"Demageard","apMat":"Vinnick","password":"$2a$04$/M33AuFauVF.vMd3BiDG2OH7TlfM4yXiN/ez0I9ZK9kdo6j1k5koW","email":"cvinnick0@irs.gov", "superUser":true},
{"nombre":"Rory","apPat":"Colleymore","apMat":"Meadows","password":"$2a$04$p0SmiKB8y1oiGbnkJNtfs..9pqhlhxYxNd3707Ju0eD9U4krONcpm","email":"rmeadows1@ebay.co.uk", "superUser":false},
{"nombre":"Neils","apPat":"Spight","apMat":"Uvedale","password":"$2a$04$3BAz4QCEG1y0EnBH3TZbIew2P18DxQqwmOmJzbTL8g3RytsigOZbK","email":"nuvedale2@slashdot.org", "superUser":false},
{"nombre":"Corella","apPat":"Riditch","apMat":"Cowmeadow","password":"$2a$04$SoY4SfZYIGp45MacjILdb.LLuPq0OVLgPPpGle9ysDFxLg5hWfIsi","email":"ccowmeadow3@princeton.edu", "superUser":false},
{"nombre":"Gregory","apPat":"Siveter","apMat":"Emblin","password":"$2a$04$lJDklsZOAayktgTQjw1HGOSKp0KKPpkk58UmmlASp/U.pCHW2B60q","email":"gemblin4@fc2.com", "superUser":false},
{"nombre":"Margarita","apPat":"Chape","apMat":"Danilenko","password":"$2a$04$sHH.s3jlHsrpHFSl7dfPzuCDWm5iLyTEBs6/ToNaxoYOp4G9AOZUK","email":"mdanilenko5@pcworld.com", "superUser":false},
{"nombre":"Ezechiel","apPat":"Sweeny","apMat":"Ferrandez","password":"$2a$04$ZvOomYcF1TWdOnUb4tHOxuBsobFf2EZXhnf5.AtYcy4pHeGheD8MK","email":"eferrandez6@hostgator.com", "superUser":false},
{"nombre":"Giustino","apPat":"Zecchinelli","apMat":"McCauley","password":"$2a$04$wGzGT7HIBs.uNUPpdp4zLOZQyGpPStc21l6dLUmDi9Odd/BEzl9oS","email":"gmccauley7@admin.ch", "superUser":false},
{"nombre":"Calli","apPat":"McBayne","apMat":"Trebble","password":"$2a$04$.sfHeF/uVLTpBvA0rd2gTu.4Co6kEu6JQgAio3XBh/0w2oQ8A82Ju","email":"ctrebble8@virginia.edu", "superUser":false},
{"nombre":"Fiona","apPat":"Weatherall","apMat":"Healks","password":"$2a$04$hMVW2t7ltVrXJ68qUOrLTOODUXlQ4HJBx6IZ6JE.hPw1hI.HA2KR6","email":"fhealks9@diigo.com", "superUser":false},
{"nombre":"Judah","apPat":"Feuell","apMat":"Moorwood","password":"$2a$04$mRIntiF8.3Q8GRmZWSSWA.NiSJnza3GvLhRKGbP2ll5.XluSvqXDy","email":"jmoorwooda@bizjournals.com", "superUser":false},
{"nombre":"Jackquelin","apPat":"Gomer","apMat":"Jindrich","password":"$2a$04$K0GrDDx4a2I.e5WrK5Zpvebbgw4mCOM5BAxt6FzjC3jaC3yMSkGVi","email":"jjindrichb@networkadvertising.org", "superUser":false},
{"nombre":"Nathanil","apPat":"Wildes","apMat":"Rablan","password":"$2a$04$WmSu1mKP27k.nqd/bkO3GOXIDHcma8TOWo1hYZaFTqnIq2.QFSYD6","email":"nrablanc@goo.ne.jp", "superUser":false},
{"nombre":"Zeb","apPat":"Duesbury","apMat":"Pitkeathley","password":"$2a$04$zGv55QnocadiL2BKntwn/u9spUQjBtP8a1mS30iW/rhtVsmVSvaYe","email":"zpitkeathleyd@issuu.com", "superUser":false},
{"nombre":"Siward","apPat":"Hatz","apMat":"Viccars","password":"$2a$04$upsETV8JaLCm/1yib4YRE.nj04TqlMXsl..VDUaAylRS0oQ0tDmMC","email":"sviccarse@biglobe.ne.jp", "superUser":false},
{"nombre":"Burnard","apPat":"Shand","apMat":"Cariss","password":"$2a$04$qrPW2srYABznYnN3QO.FEeQrGc3Gv/rV3vKV5sv0HbJIzsttiz1Yy","email":"bcarissf@weather.com", "superUser":false},
{"nombre":"Olly","apPat":"Ramplee","apMat":"Blundin","password":"$2a$04$HN0Uek9YMbNicx08zkYz9eW7I/AzCQ41SirY7DTvxBgzEEuw0hHiy","email":"oblunding@virginia.edu", "superUser":false},
{"nombre":"Eadmund","apPat":"Thorley","apMat":"Halligan","password":"$2a$04$FuPj1s8Ffqj8Y1rhTTV5mue/ERNwMCwQ0q3jkSNrBsEp40vRNH5Zy","email":"ehalliganh@mayoclinic.com", "superUser":false},
{"nombre":"Antonius","apPat":"Creavan","apMat":"Aspinall","password":"$2a$04$loUzNomiDgQOm7RlFlhiUOqyAsIGVDsUSv3QrIrv9j2o4FqaPGdEm","email":"aaspinalli@csmonitor.com", "superUser":false},
{"nombre":"Guthry","apPat":"Nicholes","apMat":"Calcutt","password":"$2a$04$gGYJGWbfXOW9ioze6x8xOumBvsb86.AmSubwckurNgeCuQCGvQWPm","email":"gcalcuttj@tuttocitta.it", "superUser":false},
{"nombre":"Dominique","apPat":"Albertson","apMat":"Anetts","password":"$2a$04$pv7f8OIBVMN4gVAgnS6DLeYjYCyAUwnoEKVNhOx.iSd8L7edbwsc2","email":"danettsk@merriam-webster.com", "superUser":false},
{"nombre":"Marrissa","apPat":"Conaghy","apMat":"Lerway","password":"$2a$04$J0aEY3lvWcK0i.zQtt0we.9V8uwfHZHaP4aAP8MeqsbXP31mjQiXW","email":"mlerwayl@unc.edu", "superUser":false},
{"nombre":"Nicola","apPat":"Pettigree","apMat":"Dunmuir","password":"$2a$04$s2ONdj1rgSfUyeeM7jXA1e6zxWfzpylTDSUalv3pb5GKePeaMYrWi","email":"ndunmuirm@so-net.ne.jp", "superUser":false},
{"nombre":"Alli","apPat":"Wherrit","apMat":"Guarnier","password":"$2a$04$nrJPJcELjbGY0cWKLMoVeu75qscrEgQ5vdZiuSfNkLoq5FoDibEyK","email":"aguarniern@springer.com", "superUser":false},
{"nombre":"Meridel","apPat":"Hadlee","apMat":"Cartmael","password":"$2a$04$qkAUAvd4tuzFB/pIuziXn.DtQCNtyLJ6gieq/XIuUNJZQdZ6vzf3K","email":"mcartmaelo@youtube.com", "superUser":false},
{"nombre":"Cosmo","apPat":"Gianasi","apMat":"Gannicott","password":"$2a$04$5qyewIODb0i4P6O7JTiJBOjboxzvgsPIYOaGEnNHA/SPZYDhUQpaC","email":"cgannicottp@cnbc.com", "superUser":false},
{"nombre":"Holli","apPat":"Loding","apMat":"Waudby","password":"$2a$04$0MNm3la6WWrprbMXj8768uTN9ZnoHZ4YwRngJEQxBaiW3yP3mC2Se","email":"hwaudbyq@smh.com.au", "superUser":false},
{"nombre":"Alasteir","apPat":"Stockell","apMat":"Heed","password":"$2a$04$wqAk.33WrfOiadhplPpwxuHJf19.o96QKFQGtSXoER2QuMD4bQgDS","email":"aheedr@tumblr.com", "superUser":false},
{"nombre":"Dix","apPat":"Hutley","apMat":"Barlie","password":"$2a$04$fRjpXFEvsh9IIh8zkD0s5.jlFuHkKtqmhzwOb4QbKF9.VroTZZUfC","email":"dbarlies@berkeley.edu", "superUser":false},
{"nombre":"Esma","apPat":"Shadfourth","apMat":"Tapson","password":"$2a$04$Rk5uOBgZ6luLDRGuF8e/lOyZskbX91CpUpOrm3OYUXboFg35LuiW.","email":"etapsont@theatlantic.com", "superUser":false},
{"nombre":"Tara","apPat":"Balcock","apMat":"Ranken","password":"$2a$04$1BeGKI6Os8A5Win3gJkFYuL4HsWTSn7j4yE5wod6csWhPwIHbwUEK","email":"trankenu@ifeng.com", "superUser":false},
{"nombre":"Bronny","apPat":"Holcroft","apMat":"Behling","password":"$2a$04$Vn3iYdDtU1u3kNH3qVQof.EkZ8NsDK6oiEJQUBGhBowcCvC9jBKxe","email":"bbehlingv@senate.gov", "superUser":false},
{"nombre":"Dinah","apPat":"Varnham","apMat":"Pirt","password":"$2a$04$YQeeCESA8.VeL/j/bmm5Y.vjGef5OPrF.IXGKgPBfr/aMHFAjS5iS","email":"dpirtw@bbb.org", "superUser":false},
{"nombre":"Brenden","apPat":"Izard","apMat":"Sowthcote","password":"$2a$04$S32.XLoJTeuMHje4Ki/HNer/t4Qlx7AwO9MB0iIkVWjYlLO.ArgvO","email":"bsowthcotex@ustream.tv", "superUser":false},
{"nombre":"Freddie","apPat":"Tace","apMat":"Thewles","password":"$2a$04$X3wSYj4Cl7QmHs7skPynHegaVr4dZwuzYtwvW8QEgqOdsQITn7ErO","email":"fthewlesy@chronoengine.com", "superUser":false},
{"nombre":"Trever","apPat":"Brabbins","apMat":"Hodgins","password":"$2a$04$yMpeiGQvbJqCQak/O2J7T.PdwFYFukbN5M.YYdfoWIP6P7MbgWyau","email":"thodginsz@over-blog.com", "superUser":false},
{"nombre":"Ingeborg","apPat":"Carnson","apMat":"Emblow","password":"$2a$04$tBiEtjeNoshO/6mQXVdeMeX.yVEicCFL0w9SXC1...yIahsOuVcmy","email":"iemblow10@parallels.com", "superUser":false},
{"nombre":"Dixie","apPat":"Yelden","apMat":"Quinnelly","password":"$2a$04$6BVMVD5Ocjm6MiasfOfQwe7HHHo14SVwOQErLRIjSUHR/pwoiwJH2","email":"dquinnelly11@indiatimes.com", "superUser":false},
{"nombre":"Selie","apPat":"Gyrgorcewicx","apMat":"Cleen","password":"$2a$04$ezhJlpjjYclepfX.VElFsu3ynC7V6KXh8nynS6PCSHxCxf21VqFVq","email":"scleen12@apple.com", "superUser":false},
{"nombre":"Rayner","apPat":"Tamblingson","apMat":"Gillyatt","password":"$2a$04$6U6cV5Ebs6dOmd5ppqS9WujW92WOSxtACoj7gWgEEN.5mMGSr9v2m","email":"rgillyatt13@paypal.com", "superUser":false},
{"nombre":"Dominga","apPat":"Hebbard","apMat":"Withrington","password":"$2a$04$vmVyNBt004QM.XSkslz22Op3lejWU8.seGaeIolJE4WTtxZIZLVuG","email":"dwithrington14@vimeo.com", "superUser":false},
{"nombre":"Karlen","apPat":"Dowgill","apMat":"Baitman","password":"$2a$04$ZgHUkGRZRro0wz4xZbfMN.Jq5o556Nmni3Y/0nJgQGA5zAV4eMWQ2","email":"kbaitman15@eventbrite.com", "superUser":false},
{"nombre":"Jecho","apPat":"Bannester","apMat":"Spuffard","password":"$2a$04$2Tvy3LodGUDXAsDzbkjkguSSz7F3tX4ivF461cn4LYJzi3X5hpYt2","email":"jspuffard16@icio.us", "superUser":false},
{"nombre":"Blane","apPat":"Stannering","apMat":"Ledrane","password":"$2a$04$7MIepXvRk72ilX2dN1HGZutEg3nz9jPCtDhRIIC5nXJ6c1A2IfsyW","email":"bledrane17@friendfeed.com", "superUser":false},
{"nombre":"Marthe","apPat":"St. Queintain","apMat":"Blakeborough","password":"$2a$04$R.zXoqx37U4VffSxIRhpkuEK.A7u4X8PVAvf.nsPnxIodSZ5P1jEu","email":"mblakeborough18@foxnews.com", "superUser":false},
{"nombre":"Barnebas","apPat":"Brydie","apMat":"Bolderstone","password":"$2a$04$XtkFvuJRBuJoGxQAnpwbOOiFOoH9eVI4ibZDT7Xek..dQVrZ3dMt2","email":"bbolderstone19@ocn.ne.jp", "superUser":false},
{"nombre":"Blancha","apPat":"Cawthron","apMat":"Pendrill","password":"$2a$04$tD0pAjczTHFv2wBbHtiTbOka6GfXxGJ7xh.bUsh42UuS7E/YwWU.O","email":"bpendrill1a@wiley.com", "superUser":false},
{"nombre":"Reena","apPat":"Canas","apMat":"Westcar","password":"$2a$04$RJm//zGN4oVSxQqiTUbji.8L8ir2VfrOdMtU/J7vsj4wN1qwA3KHq","email":"rwestcar1b@webs.com", "superUser":false},
{"nombre":"Prudy","apPat":"Heale","apMat":"Pegden","password":"$2a$04$odpFTHh7laf50lQuXjFLU.vyPSOKE4c0I2Bwksk3iyTmf/bpySrW6","email":"ppegden1c@webnode.com", "superUser":false},
{"nombre":"Marlo","apPat":"Garci","apMat":"Mixon","password":"$2a$04$K0Bd83.1buM7v8BkrbOqmO7FipTaAmbUoPTRJuUkg46o/VIL/qzfy","email":"mmixon1d@yahoo.co.jp", "superUser":false},
{"nombre":"Page","apPat":"Whiskerd","apMat":"Paddison","password":"$2a$04$P.mPfIm9mWJ7F0MBprdIae7uD9gHNYBpnerc.f1xA1VMOWUmLJqv.","email":"ppaddison1e@amazon.co.uk", "superUser":false},
{"nombre":"Bendix","apPat":"Butchard","apMat":"Arderne","password":"$2a$04$d48nsiHVybmY4wi6xmLOjujslI2R.igWwCFE2deqm7myk/oZYM/aW","email":"barderne1f@spotify.com", "superUser":false},
{"nombre":"Melisa","apPat":"Stormouth","apMat":"Domeny","password":"$2a$04$/8C111yh.QMTXQN/AsFVDOjDH.C1TLYXPKZBijrP156lP.ydqJZay","email":"mdomeny1g@europa.eu", "superUser":false},
{"nombre":"Humfrid","apPat":"Treherne","apMat":"Croneen","password":"$2a$04$cSRc0PoJiObt0GwkiWe5UepWWaEKeoEQsgASTLJ78AIoJ2w0pStfu","email":"hcroneen1h@tumblr.com", "superUser":false},
{"nombre":"Elli","apPat":"Brann","apMat":"Stranio","password":"$2a$04$J.FsQbFwsmZzbGzAYKCzMuzn1MZf4BsdlMEUPHEhSzOWZ2kNKcQEy","email":"estranio1i@toplist.cz", "superUser":false},
{"nombre":"Alexandrina","apPat":"Giabuzzi","apMat":"Quimby","password":"$2a$04$E3Z9TWdXi.J4VXFDxtaqlum3BKuoDChrD//JAVxFoLx8tB3lIG3PO","email":"aquimby1j@guardian.co.uk", "superUser":false},
{"nombre":"Constantino","apPat":"Frazier","apMat":"Groome","password":"$2a$04$DKZXU3bSnzVoBgdN.Q9vSeRO/l8Jtbzo88427VSqbr3EZgaC7968u","email":"cgroome1k@msn.com", "superUser":false},
{"nombre":"Robinet","apPat":"Abbotts","apMat":"Towse","password":"$2a$04$hsgDAxFqIm4B4H5PQ1K.VODiJTu.2TxrSz7uqvYXt9UWD0Mo.nVIa","email":"rtowse1l@digg.com", "superUser":false},
{"nombre":"Ewen","apPat":"Burtwhistle","apMat":"Botte","password":"$2a$04$96gT1972N3m33wHprvYk9.4jBCfreSZhkrUNJNO.qZhN2wS.QOEqq","email":"ebotte1m@prlog.org", "superUser":false},
{"nombre":"Nelia","apPat":"Letixier","apMat":"Gravett","password":"$2a$04$vc38wUek8zFqQmGOJWHgFejvG2w9kabnHnf5p2I.kyK9/aTXO.NAq","email":"ngravett1n@ftc.gov", "superUser":false},
{"nombre":"Hebert","apPat":"Munson","apMat":"Beagan","password":"$2a$04$iAjMoyXNNhYvqFvPXLDul.3caL9v18BASgpcMGT.PdXp.3RmwlF4.","email":"hbeagan1o@illinois.edu", "superUser":false},
{"nombre":"Ulysses","apPat":"Surgey","apMat":"Dorman","password":"$2a$04$tKzCjmDTAaIvzZzpAcA9QOPWW2lQc3XLvyPExh8e1dYBkEC95SiaS","email":"udorman1p@nature.com", "superUser":false},
{"nombre":"Zelig","apPat":"Giacoboni","apMat":"Dawidsohn","password":"$2a$04$0uhbQd8Ui7ExygfZrIxj5eoRugzLWwyXDZKb0kVS1dRG.0NDXV8yG","email":"zdawidsohn1q@csmonitor.com", "superUser":false},
{"nombre":"Philis","apPat":"Bauduccio","apMat":"Fortun","password":"$2a$04$IK7fvvdCEbtEQOEwHHNX7eC2Lhllr5iceYZFqGzlU..t8BhP5tVc6","email":"pfortun1r@shutterfly.com", "superUser":false},
{"nombre":"Iona","apPat":"Oxbrow","apMat":"Dadge","password":"$2a$04$jnSNdyDqG197ha2SXNKKj.apVq8mmROTG8dI28SLVImifI2AuAhtm","email":"idadge1s@intel.com", "superUser":false},
{"nombre":"Victor","apPat":"Flowitt","apMat":"Pembry","password":"$2a$04$qZwwMWkGqQiNG9.otZXFV.SBC1ChtMloliTDuprupUYotob3Ko1T2","email":"vpembry1t@newsvine.com", "superUser":false},
{"nombre":"Alessandra","apPat":"Gettins","apMat":"McKague","password":"$2a$04$wEd1a7vRJjrutdgHLDGexOA7soZhAArTqUYayy3UgwwQJJxXrfdGm","email":"amckague1u@dion.ne.jp", "superUser":false},
{"nombre":"Flem","apPat":"Rainbow","apMat":"Heningam","password":"$2a$04$dswFDxOuLvi/Po4i4fpPnu2DuFtjr.DjPlQ95omkTOgrv2eiGgGZm","email":"fheningam1v@mtv.com", "superUser":false},
{"nombre":"Shaine","apPat":"Bulled","apMat":"Mogford","password":"$2a$04$ifjfyo9DoXU.puf6eGwsXOCLwODMsZ..scOtKCU0Sj38D2VuTZL.q","email":"smogford1w@google.es", "superUser":false},
{"nombre":"Wilie","apPat":"Larmett","apMat":"Andreasen","password":"$2a$04$sozEkEY7pROSGWrFpzWKFeZW1SVkd69X4xVIE8NhkGg3G/JItFG8K","email":"wandreasen1x@phpbb.com", "superUser":false},
{"nombre":"Rebbecca","apPat":"Staneland","apMat":"McElory","password":"$2a$04$4MhBeocpk0vqIWf9Sf10tOx3VZhk7nJOYoK7EKKOADYbcDnuM3G9.","email":"rmcelory1y@indiegogo.com", "superUser":false},
{"nombre":"Lanita","apPat":"De Domenico","apMat":"Pauli","password":"$2a$04$5Z7aO41lKimZLFwf19bzROtCSG867jrQk0Lad5WBeCLFPbvmVHHOC","email":"lpauli1z@so-net.ne.jp", "superUser":false},
{"nombre":"Della","apPat":"De Metz","apMat":"Seals","password":"$2a$04$m7z3yvfE7x493oTv74LAJuNnha4De7mRSkpMXGKvLncXR2xX6M5m.","email":"dseals20@com.com", "superUser":false},
{"nombre":"Clemmy","apPat":"Colgan","apMat":"Hammon","password":"$2a$04$VK5To7BVs0PogUUaj1Hcr.zxSmKoZCYFxGRyvoZYEH9HD7smsVR.i","email":"chammon21@bbc.co.uk", "superUser":false},
{"nombre":"Brigit","apPat":"Thurling","apMat":"Guinness","password":"$2a$04$5qQTJrpMsiBJV0Q/oIJZoO0IZjRmaTATHHTgPmZnsiHQY9xfaMvse","email":"bguinness22@nymag.com", "superUser":false},
{"nombre":"Starla","apPat":"Guite","apMat":"Quadling","password":"$2a$04$3OgPlDC5B/SnpZob7l1V1OTEhIgMBNmBMh1yGAYKCM42YUGdQ1a9i","email":"squadling23@miibeian.gov.cn", "superUser":false},
{"nombre":"Glynnis","apPat":"Dukelow","apMat":"Oglevie","password":"$2a$04$q29lqVa4C30bSfGAAGMS9O7LNxqmsunJ0YlkgeVBlDGENvxxQ7/1S","email":"goglevie24@studiopress.com", "superUser":false},
{"nombre":"Amanda","apPat":"Kensett","apMat":"Pendrich","password":"$2a$04$EcE3O8tn8dXayZFycwXTX.CDf/4j8Sj/9n866luoJQeTlkx1mwXzG","email":"apendrich25@loc.gov", "superUser":false},
{"nombre":"Rickie","apPat":"Raynard","apMat":"Tyrie","password":"$2a$04$IVH5hJrl1GguxpBtQ5hPw.nAYX4W7bnCxPAKIzCJeEW0NU9ApUCPi","email":"rtyrie26@cargocollective.com", "superUser":false},
{"nombre":"Deloria","apPat":"Mirams","apMat":"Beagan","password":"$2a$04$ASPXsY9tZnX6dBMew0v2XOE/Oug01hrz7r.SdNiKBwOAVvXCcKjFS","email":"dbeagan27@icio.us", "superUser":false},
{"nombre":"Mariette","apPat":"Fasler","apMat":"Fritter","password":"$2a$04$nx8KI3H6FMP0OONbPfT5LuxlFpgiHweRXlZI.hexM.xbNl27ktN7G","email":"mfritter28@cnn.com", "superUser":false},
{"nombre":"Crysta","apPat":"Fitt","apMat":"Gretham","password":"$2a$04$xaq4TBMrQPYCnPPZjaNQx.bUhitjWWzolAJDPFoll833ERYz3Wi46","email":"cgretham29@wufoo.com", "superUser":false},
{"nombre":"Eleni","apPat":"Carlan","apMat":"Bavin","password":"$2a$04$70L5VKdXCUqqQMPn0IL78Ow5vV0TR2wfBRK8TGXQaIHT2eXHrQtAi","email":"ebavin2a@slashdot.org", "superUser":false},
{"nombre":"Mabel","apPat":"Oslar","apMat":"Beckinsale","password":"$2a$04$COT3xgDBG.o1Uym8S7gH0eULdsq/j79zlw4mI17fCuS3w98VLIety","email":"mbeckinsale2b@hhs.gov", "superUser":false},
{"nombre":"Georgeta","apPat":"Favel","apMat":"Keetch","password":"$2a$04$UCle6xzQUeJCXjqLqoZ8Me9TOyBlR1mcRTi63DMPOLspwm63nWL5O","email":"gkeetch2c@pagesperso-orange.fr", "superUser":false},
{"nombre":"Al","apPat":"Flasby","apMat":"Lynde","password":"$2a$04$e5LX48tAJewRvRJDxidvheHWOJc.Vwsl/dHb.5fZsmp110VAMJcCu","email":"alynde2d@dyndns.org", "superUser":false},
{"nombre":"Melicent","apPat":"Ivain","apMat":"La Wille","password":"$2a$04$Qw1Dce039U80Im1dFitsaucDr5ni19LHYnk1vtUTsssfMgevRAjxC","email":"mlawille2e@amazon.co.jp", "superUser":false},
{"nombre":"Rhonda","apPat":"Hurren","apMat":"Hukins","password":"$2a$04$BbLXUk1kAYha54PrE4WoxOYW721apPvBxs6bNZ7vhuoldI63wPt6e","email":"rhukins2f@feedburner.com", "superUser":false},
{"nombre":"Marillin","apPat":"Haith","apMat":"Hercock","password":"$2a$04$xAaQcmuN3hbFN.kOxOTPuOODeaWoH7fb2TowgbHmrjx8oSlBIyPXC","email":"mhercock2g@posterous.com", "superUser":false},
{"nombre":"Alethea","apPat":"Toy","apMat":"Witling","password":"$2a$04$cHisVgzmd9H0VoXSgcpBx.v3dZrWphEK8hwH6CFT6cOBi4qQZkk1W","email":"awitling2h@mozilla.org", "superUser":false},
{"nombre":"Cicely","apPat":"Purrington","apMat":"Matczak","password":"$2a$04$ZDXe2gx.dISqQQ7v3xUcROkWUhfeQycV9gEinOnYD46RKkhnB/8h2","email":"cmatczak2i@microsoft.com", "superUser":false},
{"nombre":"Henrik","apPat":"Chene","apMat":"Dumbar","password":"$2a$04$goWL4PiRFNzZfBvhgq60juyudvKvz2gRl/eT7NFak4QwrmZI5f/K2","email":"hdumbar2j@umich.edu", "superUser":false},
{"nombre":"Sophronia","apPat":"Courcey","apMat":"Bladesmith","password":"$2a$04$pLSGWyda/tx2vMF0ZT7gCejQjjR6MbQmuekPWImvNM2s6.w76VnZy","email":"sbladesmith2k@skype.com", "superUser":false},
{"nombre":"Philipa","apPat":"Palleske","apMat":"Petren","password":"$2a$04$y877b6KPuczDHlAh/H1M.O3Jaiagqw9L/pt9GdV.Iu2NZ3uInT44K","email":"ppetren2l@google.it", "superUser":false},
{"nombre":"Maximo","apPat":"Bodesson","apMat":"Nesbitt","password":"$2a$04$PHDuyAurAXuzA6snoiQwuObKJd3T1e9D/cA6B/cQomxKza5fhTFWK","email":"mnesbitt2m@reference.com", "superUser":false},
{"nombre":"Lisette","apPat":"Shoobridge","apMat":"Aulsford","password":"$2a$04$G5CYDotH2uRkb4XtZ.QrIubYiFscKULGS3DzuqR9qf35tlu.DLrrW","email":"laulsford2n@slideshare.net", "superUser":false},
{"nombre":"Park","apPat":"Nuemann","apMat":"Rye","password":"$2a$04$afxU91kvVcHjRiplzFT2SuaFhSUnmfBdRoAbDrlTQbkpUVkjRbroi","email":"prye2o@webmd.com", "superUser":false},
{"nombre":"Gustavo","apPat":"Honack","apMat":"Wormald","password":"$2a$04$T.Ha/GiTslQWhNRq0zojJeRFl842SWbpsPNp8WkIwipFEwseiS/Ou","email":"gwormald2p@ovh.net", "superUser":false},
{"nombre":"Britt","apPat":"Wafer","apMat":"Skilling","password":"$2a$04$5VLv5TQX4hRFhrtonaDfZeJOqqfdNsUE6I3XxLEkoSZTn7XvhV4ny","email":"bskilling2q@vinaora.com", "superUser":false},
{"nombre":"Lethia","apPat":"Mucci","apMat":"Peek","password":"$2a$04$paAR3Owp7XhxCPZcOF1ciOpaiQzfjK6G28tpU08VfalD0wjxtoinO","email":"lpeek2r@e-recht24.de"}];

export default sample_usuarios;