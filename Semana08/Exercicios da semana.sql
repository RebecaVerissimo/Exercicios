create table departamento (
	id serial primary key,
	nome varchar(200) not null,
	dataCriacao date not null
);

create table funcionarios (
	id serial primary key,
	nome varchar(200) not null,
	idade int not null,
	check(idade >= 18),
	cargo varchar(100) not null,
	salario decimal(7, 2) not null,
	iddepartamento int not null,
	foreign key (iddepartamento) references departamento (id)
	on delete cascade
);

insert into departamento (nome, datacriacao) values 
('RH', '2015-03-01'),
('Logistica', '2015-04-15'),
('TI', '2015-06-10');

select * from departamento;

insert into funcionarios (nome, idade, cargo, salario, iddepartamento) values 
('Bruno Costa', 25, 'Programador Front', 10550.80, 3),
('Edder Salazar', 35, 'Programador Back', 10550.80, 3),
('Rebeca Verissimo', 26, 'Programador junior', 7750.50, 3),
('Karina Oliveira', 28, 'Recrutador', 8000.00, 1),
('Jose Garcia', 40, 'Assistente de logistica', 5000.00, 2),
('Gabriel Marques', 45, 'Gerente de logistica', 7000.00, 2);

select * from funcionarios;

select * from funcionarios as f inner join departamento as d
on f.iddepartamento = d.id

select
f.nome as Funcionario,
f.idade,
f.cargo,
f.salario,
d.nome as Departamento,
d.dataCriacao
from Funcionarios as f
inner join Departamento as d
on f.idDepartamento = d.id;

update departamento set nome = 'TI & IA' where id = 3
update funcionarios set idade = 22 where id = 5

delete from departamento where id = 2;

delete from funcionarios where id = 4;

drop table funcionario;
drop table departamento;


alter table departamento alter column nome type varchar(200) not null;