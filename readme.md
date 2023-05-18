### Для запуска приложения необходимо:
- склонировать репозиторий командой git clone
- cd в каталог приложения
- yarn для установки пакетов
- yarn start для запуска приложения

Приложение по умолчанию стартует на 3001 порту.

#### В приложении используется следующая архитектура:

- pages: элементы, которые выводятся в маршрутах в конфигурации роутера
- view-models (vm) - "умные компоненты", использующие бизнес-логику и подготавливающие данные для views
- views - компоненты, не использующие бизнес-логику. Могут иметь внутреннее состояние.
- ui-elements - небольшие переиспользуемые компоненты, кнопки, флекс-боксы и т.п.
