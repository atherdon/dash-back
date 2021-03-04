### editors statistics/calculations

Я не успеваю собрать всю информацию, которую я бы хотел вам передать по статистике/stages/statuses.
Это большие темы и мне многое еще неизвестно.
Поэтому я предлагаю сделать часть статистики, "по мелочи". 

дополнительный вопрос - чего мне и вам нехватает для быстрой и активной работы? 
Может нам нужно выделить время на "improvements" milestone. Например пока меня не будет онлайн.

Мы можем сделать правильную логику для данной странице.

![image](https://user-images.githubusercontent.com/1469198/110033886-a4bb8b80-7d42-11eb-9f23-89929cddc41b.png)


Раздел Progressbars должен считаться от значений в published. Посути все 3 прогрессбара это SUM всех выложенных статей от всех редакторов.
просто каждый прогресс бар имеет разный диапазон.

Тоесть у нас должен быть метод, который считает сколько всего статей было выложено за неделю.


### Следующий вопрос - разница в значениях Edited, Edited % и т.д.

![image](https://user-images.githubusercontent.com/1469198/110035106-e8fb5b80-7d43-11eb-8256-e2fb62970775.png)

вот что я отвечал другим редакторам

Q: However, I don't understand what the percentages mean. For example it says Amy Tom, Published 10, Published % is - 56.52?
A:  Percentages came from a document that Marina operating. The main idea related to measuring how much work was done per person. Numbers not real. I made them from my head, but when we'll build a module, that will make all calculations automatically - this will be a very cool feature.  Published and Published, % it's the same number, but with different purposes. % will show how many articles published from the main pool of published articles. Sometimes it much easier than a number. and give a better perspective.


Процент нужен для того, чтобы оценить вклад редактора в прогресс, который команда сделала за неделю.
Например я выложил только 5 статей, а остальные 40. Процент поможет понять, и показать, что я сделал "3%" а остальные редакторы сделали "20%" от всего результата.
Тоесть для Edited % мы берем количество моих редактированных статей, умножаем на 100 и делим на сумму всех редактированных статей. обычная пропорция. тоже самое для "published %", "rejected %"  

