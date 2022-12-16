dane są integrale kiedy są prawdziwe

każda tabela musi posiadać klucz podstawowy albo główny

integralność referencyjna - każda wartość klucza obcego musi być wartością klucza podstawowego powiązanej tabeli albo wartoścą null

MySQL: Check, sprawdza czy wpis jest ok

CREATE TABLE Klient(
ID int primary key,
Wiek int,
CHECK (wiek>18)
);

CONSTRAINT
