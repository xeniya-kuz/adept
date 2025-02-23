<h1>Test Task</h1>

<h2>Launch</h2>
<p><b>npm run start</b> - start the project</p>
<p><b>npm run server</b> - start the server</p>

<h2>Features</h2>
<ul>
  <li>Portal</li>
  <li>Asynchronous components</li>
  <li>Asynchronous reducer</li>
  <li>FSD</li>
  <li>Without using create-react-app</li>
</ul>

<h2>Tools</h2>
<ul> 
  <li>React</li>
  <li>Redux Toolkit</li>
  <li>TypeScript</li>
  <li>Json-server</li>
  <li>Webpack</li>
  <li>ESLint</li>
  <li>Stylelint</li>
</ul>

<h2>Technical Task</h2>
<p>Create a single-page application “Company List” using the React.js library.</p>
<p><b>Requirements:</b> React, Redux (redux-toolkit), TypeScript. Other tools are at your discretion, but it is recommended to use a minimal number of libraries (for example, the table should be implemented manually without third-party libraries).</p>
<p><b>Description:</b></p>
<p>On the left, there is a table with a list of companies. On the right, there is a table displaying the employees of the selected company. The data in the tables should be stored in the store.</p>
<p>The data for the "Companies" and "Employees" tables should be fake and created manually.</p>

<h2>Company Table</h2>
<p><b>Header:</b> Checkbox “Select All”</p>
<p><b>Body Columns:</b></p>
<ul>
  <li>Checkbox</li>
  <li>Company Name</li>
  <li>Number of Employees</li>
  <li>Address</li>
</ul>
<p>Clicking a checkbox in a row highlights the row in a color of your choice. Clicking the “Select All” checkbox highlights all rows.</p>

<h2>Employee Table</h2>
<p>If a single company is selected, the "Employees" table on the right displays the employees of that company.</p>
<p>If no company is selected, the "Employees" table remains hidden.</p>
<p><b>Header:</b> Checkbox “Select All”</p>
<p><b>Body Columns:</b></p>
<ul>
  <li>Checkbox</li>
  <li>Last Name</li>
  <li>First Name</li>
  <li>Position</li>
</ul>
<p>Clicking a checkbox in a row highlights the row in a color of your choice.</p>

<h2>Editing and Deletion</h2>
<ul> 
  <li>All table fields are editable except the employee count in the company table.</li>
  <li>Both tables should have the ability to add/remove companies/employees using corresponding buttons.</li>
  <li>Multiple selection deletion should be supported (if multiple rows are selected).</li>
  <li>When employees are added or removed, the employee count in the company table should be updated accordingly.</li>
</ul> 

<h2>Final Project Submission</h2>
<p>The completed project should be uploaded to a repository on <b>GitHub</b> or <b>GitLab</b>.</p>

<h2>Bonus Points</h2>
<ul>
  <li>Optimize for cases where there may be <b>10,000+ companies/employees</b>.</li>
  <li>Preferably implement <b>dynamic loading on scroll</b> instead of pagination.</li>
</ul>

<h2>Notes</h2>
<ul>
  <li>Minimize the use of third-party libraries.</li>
  <li>The application design is up to you.</li>
  <li>Completing all points is not mandatory but desirable.</li>
  <li>The more accurately the test task is completed, the higher your chances of receiving a positive response.</li>
</ul>

<br/>
<br/>

<h1>Тестовое задание</h1>

<h2>Запуск</h2>
<p><b>npm run start</b> - запуск проекта</p>
<b>npm run server</b> - запуск сервера

<h2>Особенности</h2>
<ul>
  <li>Portal</li>
  <li>Асихнронные компоненты</li>
  <li>Асинхронный редьюсер</li>
  <li>FSD</li>
  <li>Без использования create-react-app</li>
</ul>

<h2>Инструменты</h2>
<ul>
  <li>React</li>
  <li>Redux Toolkit</li>
  <li>Typescript</li>
  <li>Json-server</li>
  <li>Webpack</li>
  <li>Eslint</li>
  <li>Stylelint</li>
</ul>

<h2>ТЗ</h2>
<p>Создайте одностраничное приложение “Список компаний”, используя библиотеку React.js.</p>
<p>Требования: react, redux(redux-toolkit), typescript, остальное на ваше усмотрение, НО стоит использовать минимальное кол-во библиотек(например, таблицу нужно точно сделать самостоятельно, без сторонних библиотек)</p>
<p>Дано: Слева имеется таблица со списком компаний. Справа - таблица сотрудников выбранной компании. Данные в таблицах должны храниться в сторе.</p>
<p>Данные для таблиц "компании" и "сотрудники" - фейковые, создать самостоятельно.</p>
<p>Шапка таблицы "компании": Чекбокс “Выделить всё”</p>
<p>Тело таблицы имеет столбцы: | Чекбокс | Название компании | Кол-во сотрудников | Адрес</p>
<p>При клике по чекбоксу в строке, соответствующая строка выделяется цветом на ваше усмотрение. При клике по чекбоксу “Выделить всё” - выделяются все строки.</p>
<br>
<p>При выделении одной компании - справа, в таблице "сотрудники", видим данные сотрудников этой компании.</p>
<br>
<p>Шапка таблицы "сотрудники": Чекбокс “Выделить всё”</p>
<p>Тело таблицы имеет столбцы: | Чекбокс | Фамилия | Имя | Должность</p>
<p>В таблице "сотрудники" при клике по чекбоксу в строке, соответствующая строка выделяется цветом на ваше усмотрение.</p>
<p>Если не выделена ни одна из компаний, то таблица "сотрудники" не видна.</p>
<p>Все поля таблиц редактируемые кроме счётчика сотрудников в таблице "компании".</p>
<p>В обеих таблицах реализовать механизм добавления/удаления компаний/сотрудников по соответствующим кнопкам. Удаление может быть множественное(если выделены несколько строк).</p>
<br>
<p>При добавлении/удалении сотрудников у компании, счётчик сотрудников в таблице "компании" обновляется.</p>
<br>
<p>Готовый проект нужно разместить в репозитории на Github или Gitlab.</p>
<br>
<p>Будет плюсом: предусмотреть вариант когда компаний/сотрудников может быть 10 000+(желательно предложить вариант без переключения по страницам, динамическая загрузка при скролле)</p>
<br>
<p>Примечания:<br/>
Желательно использовать минимум сторонних библиотек.<br>
Дизайн приложения  на ваш вкус. Выполнение всех пунктов не является обязательным, но желательным. Чем точнее будет выполнено тестовое задание, тем у вас больше шансов получить положительный ответ.
