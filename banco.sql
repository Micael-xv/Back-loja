create table users
(
    id            serial,
    username      varchar(50)                                        not null,
    cpf           varchar(14)                                        not null,
    name          varchar(200)                                       not null,
    phone         varchar(16)                                        not null,
    password_hash varchar(255)                                       not null,
    token         varchar(255),
    role          varchar(255) default 'customer'::character varying not null,
    cart          jsonb,
    email         varchar(255)                                       not null,
    recuperation  varchar(255),
    created_at    timestamp with time zone                           not null,
    updated_at    timestamp with time zone                           not null,
    primary key (id),
    unique (username),
    unique (cpf),
    unique (email)
);

create table payments
(
    id         serial,
    name       varchar(255)             not null,
    created_at timestamp with time zone not null,
    updated_at timestamp with time zone not null,
    primary key (id),
    unique (name)
);

create table cupoms
(
    id         serial,
    code       varchar(255)                                      not null,
    type       varchar(255) default 'percent'::character varying not null,
    value      numeric                                           not null,
    uses       integer      default 999,
    created_at timestamp with time zone                          not null,
    updated_at timestamp with time zone                          not null,
    primary key (id)
);

create table categories
(
    id         serial,
    name       varchar(255)             not null,
    created_at timestamp with time zone not null,
    updated_at timestamp with time zone not null,
    primary key (id)
);

create table adresses
(
    id            serial,
    zip_code      varchar(255)             not null,
    state         varchar(255)             not null,
    city          varchar(255)             not null,
    street        varchar(255)             not null,
    district      varchar(255)             not null,
    number_forget varchar(255),
    created_at    timestamp with time zone not null,
    updated_at    timestamp with time zone not null,
    id_user       integer,
    primary key (id),
    foreign key (id_user) references users
);

create table products
(
    id          serial,
    name        varchar(255)             not null,
    price       numeric(15, 2)           not null,
    image       varchar(2000),
    description varchar(300),
    created_at  timestamp with time zone not null,
    updated_at  timestamp with time zone not null,
    id_category integer                  not null,
    primary key (id),
    foreign key (id_category) references categories
);

create table orders
(
    id               serial,
    status           varchar(255) default 'criado'::character varying,
    total            numeric,
    total_discount   numeric      default 0,
    created_at       timestamp with time zone not null,
    updated_at       timestamp with time zone not null,
    id_user_costumer integer                  not null,
    id_user_deliver  integer,
    id_adress        integer,
    id_payment       integer                  not null,
    id_cupom         integer,
    primary key (id),
    foreign key (id_user_costumer) references users,
    foreign key (id_user_deliver) references users,
    foreign key (id_adress) references adresses,
    foreign key (id_payment) references payments,
    foreign key (id_cupom) references cupoms
);

create table orders_products
(
    id             serial,
    price_products numeric                  not null,
    quantity       integer default 1        not null,
    created_at     timestamp with time zone not null,
    updated_at     timestamp with time zone not null,
    id_order       integer                  not null,
    id_product     integer                  not null,
    primary key (id),
    unique (id_order, id_product),
    foreign key (id_order) references orders,
    foreign key (id_product) references products
);