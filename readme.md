Сборка на основе pug. scss, Bootstrap 4.3.1


4.3.1

1. https://github.com/pashawol/starter/blob/db4800490bd50b9a8b98b7cbb4c955cf37d660fe/sourse/pug/blocks/form-wrap/form-wrap.pug
1.1 Переделал в  одну миксину для инпутов и textarea в pug
```
mixin input(pl,  t, p, name )
	mixin t(t,pl)
		if t== "textarea"
			+e.TEXTAREA.input.form-control( placeholder= pl name= name)&attributes(attributes)
		else if t && t== !"textarea"
			+e.INPUT.input(type= t placeholder= pl name= name)&attributes(attributes)
		else
			+e.INPUT.input(type="text" placeholder= pl name= name)&attributes(attributes)
	+e.input-wrap
		if p
			label
				+e.SPAN.title= p
				+t(t,pl)
		else
			+t(t,pl)
	// +e.input-wrap
```
1.2. Переделал в  одну миксину для инпутов  checkbox и radio
```
mixin in-c(typ, text, name )
	+b.LABEL.custom-input
		if typ
			+e.INPUT.input(type="radio" , name= name)
		else 
			+e.INPUT.input(type="checkbox" , name= name)

		+e.SPAN.lab
		if block
			block
		else
			+e.SPAN.text= text
```
2. https://github.com/pashawol/starter/blob/db4800490bd50b9a8b98b7cbb4c955cf37d660fe/sourse/pug/blocks/mixin-wrap/mixin-wrap.pug
2.1  Добавил второй  вариант  пагинации под worpress . Стили подогнал

========================================================================================

