
![alt](/images/dom.jpg)
# `Lecture 6`

## `Table of contents`
* DOM
* BOM
* Events
* DOM Methods

### `DOM`
DOM - Структурированное представление документов HTML. DOM позволяет JavaScript получать доступ к HTML-элементам и стилям для управления ими.
![alt](/images/dom%20tree.webp)
Объект `document` – основная «входная точка». С его помощью мы можем что-то создавать или менять на странице.
<br>
Согласно объектной модели документа (сокращенно DOM), каждый HTML-тег является объектом.
Вложенные теги являются «потомками» родительского элемента. Текст внутри тега также является
object. Все эти объекты доступны с JavaScript, мы можем использовать их для изменения страницы

## Свойства, доступные JS с помощью DOM
* JavaScript может изменять все элементы HTML на странице.
* JavaScript может изменить все атрибуты HTML на странице.
* JavaScript может изменить все стили CSS на странице.
* JavaScript может удалять существующие элементы и атрибуты HTML.
* JavaScript может добавлять новые элементы и атрибуты HTML.
* JavaScript может реагировать на все существующие HTML-события на странице.
* JavaScript может запускать новые HTML-события на странице

## BOM
`Объектная модель браузера` (Browser Object Model, `BOM`) – это дополнительные объекты, предоставляемые браузером (окружением), чтобы работать со всем, кроме документа.

Например:
Объект `navigator` даёт информацию о самом браузере и операционной системе. Среди множества его свойств самыми известными являются: `navigator.userAgent` – информация о текущем браузере, и `navigator.platform` – информация о платформе (может помочь в понимании того, в какой ОС открыт браузер – `Windows/Linux/Mac` и так далее).
Объект `location` позволяет получить текущий `URL` и перенаправить браузер по новому адресу

## HTML события (events)
`События (events)` – это сигнал от браузера о том, что что-то произошло. Все DOM-узлы подают такие сигналы (хотя события бывают и не только в DOM).
<br>
HTML DOM позволяет JavaScript реагировать на HTML события, например:
<br>
до нажатия:

![alt](/images/event.png) 
после нажатия
![alt](/images/e2.png)


### **Реагирование на события**
Код JavaScript может выполняться при возникновении каких-либо событий, вроде того, когда пользователь нажимает мышкой на HTML элемент.
![alt](/images/events.png)

## Методы DOM
`getElementById` — поиск элемента по идентификатору;
`getElementsByClassName` — поиск элементов по названию класса;
`getElementsByTagName` — поиск элементов по названию тега;
Метод  `querySelector()` возвращает первый дочерний элемент, соответствующий
указанному селектору(ам) CSS элемента, а метод `querySelectorAll()` может использоваться для доступа ко всем элементам
которые соответствуют указанному селектору CSS.
Свойство `innerHTML` (или свойтво) предоставляет простой способ полностью 
заменить или вставить содержимое элемента.
Метод `createElement()` - позволяет создавать и возвращать
новый элемент (пустой узел элемента) с указанным именем тега. Следует отметить, что `createElement(elementName)` создает элемент html, тег которого
передается как параметр. Возвращает созданный элемент.
![alt](/images/methods.png)
<br>

Метод `appendChild()` позволяет вставить в конец какого-либо другой элемент. Чаще всего используется после создания элемента с помощью createElement.
![alt](/images/append.png)
<br>

![alt](/images/append2.png)

## ClassList()

`add( String [,String] )` 
Adds the specified classes to the element
<br>

`remove( String [,String] )` 
Removes the specified classes from the element
<br>

`toggle(String[, Boolean])` 
If the element has no class, it adds it, otherwise it removes it. When
false is passed as the second parameter, it removes the specified
class, and if true, it adds it.
<br>

If the second parameter is undefined or a variable with
`typeof == 'undefined'`, the behavior is the same as passing only the
first parameter when calling


