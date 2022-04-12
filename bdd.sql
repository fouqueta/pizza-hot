CREATE TABLE commande (
    id integer primary key,
    entree varchar(20),
    boisson varchar(20),
    pizzas integer,
    foreign key (pizzas) references pizza (pizza)
)

CREATE TABLE pizza (
    nbIngredients integer,

)

CREATE