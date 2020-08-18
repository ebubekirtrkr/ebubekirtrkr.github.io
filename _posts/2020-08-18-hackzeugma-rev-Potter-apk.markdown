# Türkçe

Hackzeugma CTF 2020 yarı finallerinde çözdüğüm Potter sorusunun çözümünü anlatacağım.

Bize bir apk verilmişti.1
Bu apk'yi yükleyip çalıştırıp butona tıkladığımızda bir textbox'a flag'ı yazıyordu.
<br>
<br>

<img src="/assets/images/potter/1.png"  width="275"  height="400">
<br>
<br>
Ama tamamının yazılmasını beklemek asırlar sürerdi herhalde.
Apk'yı jadx-gui ile açıp MainActivity'nin içindeki a inner classına ait run methoduna baktığımızda
{% highlight java %}

public void run() {
    for (int i = 4; i < MainActivity.this.p.length + 4; i++) {
        for (int j = 0; j < 11; j++) {
            try {
                Thread.sleep(MainActivity.this.r * ((long) i));
                this.b.setCharAt(i, (char) (new Random().nextInt(26) + 97));
                MainActivity.this.runOnUiThread(new C0033a());
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        StringBuilder sb = this.b;
        MainActivity mainActivity = MainActivity.this;
        sb.setCharAt(i, mainActivity.getChar(mainActivity.p[i - 4]).charAt(0));
        try {
            Thread.sleep(MainActivity.this.r);
            MainActivity mainActivity2 = MainActivity.this;
            double pow = Math.pow(3.0d, (double) (i - 4));
            double d = (double) MainActivity.this.r;
            Double.isNaN(d);
            mainActivity2.r = (long) (pow * d);
        } catch (InterruptedException e2) {
            e2.printStackTrace();
        }
        MainActivity.this.runOnUiThread(new b());
    }
    }
{% endhighlight %}
<hr>
<br>


{% highlight java %}
Thread.sleep(MainActivity.this.r * ((long) i));
{% endhighlight %}

ve
{% highlight java %}
Thread.sleep(MainActivity.this.r);{% endhighlight %}

satırlarından anlaşılacağı üzere
eğer `r` yi `0` yaparsak, hiç beklemeyecekti.
Ayrıca `r`, oluşturulurken 100 e eşitlenmişti

{% highlight java %}
public class MainActivity extends c {
    public int[] p = {8, 7, 15, 9, 0, 1, 11, 2, 3, 5, 13, 12, 14, 6, 10, 4};
    public TextView q;
    public long r = 100;
    ...
{% endhighlight %}
<br>veeee

{% highlight java %}
double d = (double) MainActivity.this.r;

mainActivity2.r = (long) (pow * d);
{% endhighlight %}
<hr>

satırlarında `d`'yi `r`'ye eşitleyip `pow` değişkenini `d` ile çarpttığından, eğer `r` yi başlangıçta `0` yaparsak,  `r` hep `0` kalacaktı.

frida-server'i çalıştırıp
potter.js
{% highlight javascript %}
Java.perform(function() {
	var main_activity= Java.use("com.hz.potter.MainActivity");

	main_activity.onCreate.overload("android.os.Bundle").implementation = function(var_0) {
			console.log(this.r.value);
			this.r.value=0;
			console.log(this.r.value);
			this.onCreate.overload("android.os.Bundle").call(this, var_0);
	}
});
{% endhighlight %}
dosyasını
`frida  -f com.hz.potter -l potter.js --no-pause` ile gönderip butona tıkladığımızda flag anında karşımıza çıkıyordu




