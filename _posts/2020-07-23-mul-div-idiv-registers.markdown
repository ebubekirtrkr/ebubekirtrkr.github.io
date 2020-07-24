
# English
In these tables I summarize the registers that used in MUl, DIV/IDIV operations in x86 assembly.

## DIV/IDIV registers Table
<table>
  <tr>
   <td>Section
<br>
Divisor Size
   </td>
   <td><strong>Dividend</strong>
   </td>
   <td><strong>Quotient </strong>
   </td>
   <td><strong>Remainder</strong>
   </td>
   <td><strong>Math. Formula</strong>
   </td>
  </tr>
  <tr>
   <td><strong>1 byte</strong>
   </td>
   <td>AX
   </td>
   <td>AL
   </td>
   <td>AH
   </td>
   <td>AX/Divisor = AL+AH
   </td>
  </tr>
  <tr>
   <td><strong>1 word</strong>
   </td>
   <td>DX:AX
   </td>
   <td>AX
   </td>
   <td>DX
   </td>
   <td>DX:AX/Divisor = AX+DX
   </td>
  </tr>
  <tr>
   <td><strong>1 double word</strong>
   </td>
   <td>EDX:EAX
   </td>
   <td>EAX
   </td>
   <td>EDX
   </td>
   <td>EDX:EAX/Divisor = EAX+EDX
   </td>
  </tr>
</table>

<hr>

## MUL registers Table

<table>
  <tr>
   <td>Section
<br>
Multiplier Size
   </td>
   <td><strong>2nd Multiplier</strong>
   </td>
   <td><strong>Multiplicand </strong>
   </td>
   <td><strong>Math</strong>
   </td>
  </tr>
  <tr>
   <td><strong>1 byte</strong>
   </td>
   <td>AL
   </td>
   <td>AX
   </td>
   <td>AX = Multiplier*AL
   </td>
  </tr>
  <tr>
   <td><strong>1 word</strong>
   </td>
   <td>AX
   </td>
   <td>DX:AX
   </td>
   <td>DX:AX = Multiplier*AX
   </td>
  </tr>
  <tr>
   <td><strong>1 double word</strong>
   </td>
   <td>EAX
   </td>
   <td>EDX:EAX
   </td>
   <td>EDX:EAX = Multiplier*EAX
   </td>
  </tr>
</table>


# Türkçe

Bu tablolarda, x86 assembly 'de MUL, DIV/IDIV operasyonlarında kullanılan register'ları özetledim.

## DIV/IDIV’de kullanılan registerler Tablosu

<table>
  <tr>
   <td>#
<br>
Bölen Boyutu
   </td>
   <td><strong>Bölünen</strong>
   </td>
   <td><strong>Bölüm</strong>
   </td>
   <td><strong>Kalan</strong>
   </td>
   <td><strong>Formül</strong>
   </td>
  </tr>
  <tr>
   <td><strong>1 byte</strong>
   </td>
   <td>AX
   </td>
   <td>AL
   </td>
   <td>AH
   </td>
   <td>AX/Bölen = AL+AH
   </td>
  </tr>
  <tr>
   <td><strong>1 word</strong>
   </td>
   <td>DX:AX
   </td>
   <td>AX
   </td>
   <td>DX
   </td>
   <td>DX:AX/Bölen = AX+DX
   </td>
  </tr>
  <tr>
   <td><strong>1 double word</strong>
   </td>
   <td>EDX:EAX
   </td>
   <td>EAX
   </td>
   <td>EDX
   </td>
   <td>EDX:EAX/Bölen = EAX+EDX
   </td>
  </tr>
</table>

<hr>

## MUL’da kullanılan registerler tablosu

<table>
  <tr>
   <td>#
<br>
Çarpan Boyutu
   </td>
   <td><strong>2. Çarpan</strong>
   </td>
   <td><strong>Çarpım</strong>
   </td>
   <td><strong>Formül</strong>
   </td>
  </tr>
  <tr>
   <td><strong>1 byte</strong>
   </td>
   <td>AL
   </td>
   <td>AX
   </td>
   <td>AX = Çarpan*AL
   </td>
  </tr>
  <tr>
   <td><strong>1 word</strong>
   </td>
   <td>AX
   </td>
   <td>DX:AX
   </td>
   <td>DX:AX = Çarpan*AX
   </td>
  </tr>
  <tr>
   <td><strong>1 double word</strong>
   </td>
   <td>EAX
   </td>
   <td>EDX:EAX
   </td>
   <td>EDX:EAX = Çarpan*EAX
   </td>
  </tr>
</table>

