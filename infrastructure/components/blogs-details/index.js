import {
    Container,
    Content,
    Header,
} from './component'
import styles from './index.module.css'


export default function BlogsDetails() {
    return (
        <Container>
            <Header />
            <Content>
                <h2 className={styles.subTitle}>Merkez Bankası'nın enflasyon raporu kimseyi şaşırtmadı ama en azından yaşanan gerçeklerin farkında olunduğuna dair intiba verilmesi piyasalara olumlu tesir yaptı diyebilirim. Biraz sabırla bekleyip analizi haftaya bırakacağım. </h2>
                <p className={styles.blogContent}>Dördüncü dalgası içinde olduğumuz söylenen Kovid ile alakalı tam anlamıyla bir hasar raporu henüz çıkmadı. Ancak büyük kurumlardan çeşitli açıklamalar geliyor elbette. Fed de son açıklamasında desteğe devam edeceğini söyledi. Yani toparlanma düşündüğümüzden daha uzun sürecek.

                    Hatırlarsanız geçen yıl Havayolu Şirketleri ve Havayolu Taşımacılığı ile ilgili “en erken 2021 son çeyrekte toparlanır” şeklinde açıklamalar yapmıştım. Bu bile iyimser bir yaklaşım olarak değerlendirilebilir. Bir örnekle açıklayayım:

                    Heathrow Havalimanı’ndan yapılan açıklamada, 2020 yılında havalimanını ziyaret eden toplam yolcu sayısının 22,1 milyon olduğu, 2021 yılında ise 21,5 milyon yolcunun havalimanını ziyaret etmesinin beklendiği kaydedildi. Yani geçen yıldan daha az kişi gelecek. Halbuki bu yıl toparlanma yılı olacaktı.  Şunu da hatırlatayım: 2019 yılında ise toplam 90 milyon yolcu Heathrow Havalimanını kullanmıştı. İnanılmaz ve üzücü bir durum.

                    Yaptıkları hesaba göre, 2021 yılının ilk yarısında Heathrow Havalimanı toplam 2,9 milyar sterlin kaybetmiş gözüküyor. Yetkililer bu durumdan hükümeti sorumlu tutuyor. Heathrow Üst Yöneticisi John Holland-Kaye, İngiltere Hükümetini kısıtlamaları kaldırmakta yavaş davranmakla suçlamış. Brexit ile birlikten ayrılan İngiltere’nin AB'deki rakiplerinin gerisinde kaldığını söylemiş.

                    "İstanbul Havalimanı da aynı durumda..."

                    BBC’ye konuşan havayolu şirketleri de AB içinde kullanılan tek tip dijital Kovid pasaportunun faydalı olduğunu belirtmiş, İngiliz Hükümetini de gelişigüzel davranmakla suçlamış.

                    İstanbul Havalimanı için de durum farklı değil: 2019'da 52 milyon yolcuya hizmet veren İstanbul Havalimanı, 2020'de pandemi nedeniyle 23,4 milyonda kalmış. Neredeyse 2 Milyar TL kayıp olduğu gözüküyor. DHMİ verisine göre bu yılın ilk altı ayında ise yolcu sayısı İstanbul Havalimanında 12,2 Milyon olarak gerçekleşmiş. Geçen yıla göre geride seyrediyor.

                    Tüm bunlar gösteriyor ki, artan maliyetlere karşı azalan yolcu sayısı ile havayolu taşımacılığının normale dönmesi beklenenden daha uzun sürecek. Temmuz Ayının son iş gününü de böylece kapatıyoruz.

                    2 Ağustos'ta görüşmek üzere.</p>
                <div className={styles.commentWrapper}>
                    <span>Yorumlar</span>
                    <input type="text" placeholder="Harika bir yazi olmus..." className={styles.commentInput} />
                </div>
                <div className={styles.authorInfo}>
                    <span>Furkan Portakal</span>
                    <span>Ekleme Tarihi : 1 Agustos 2020</span>
                </div>
            </Content>
        </Container>
    )
}