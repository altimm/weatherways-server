import Bluebird from "bluebird";
import Sequelize from "sequelize";
import { EmployeeFieldName } from "../constants/fieldNames/employeeFieldNames";
import { EmployeeAttributes, EmployeeEntity, EmployeeInstance } from "../entities/employeeEntity";

export let queryById = (id: number, queryTransaction?: Sequelize.Transaction): Bluebird<EmployeeInstance | null> => {
	return EmployeeEntity.findOne(<Sequelize.FindOptions<EmployeeAttributes>>{
		transaction: queryTransaction,
		where: <Sequelize.WhereOptions<EmployeeAttributes>>{ record_id: id }
	});
};

export let queryByFirstName = (firstName: string, queryTransaction?: Sequelize.Transaction): Bluebird<EmployeeInstance | null> => {
	return EmployeeEntity.findOne(<Sequelize.FindOptions<EmployeeAttributes>>{
		transaction: queryTransaction,
		where: <Sequelize.WhereOptions<EmployeeAttributes>>{ first_name: firstName }
	});
};

export let queryByLastName = (lastName: string, queryTransaction?: Sequelize.Transaction): Bluebird<EmployeeInstance | null> => {
	return EmployeeEntity.findOne(<Sequelize.FindOptions<EmployeeAttributes>>{
		transaction: queryTransaction,
		where: <Sequelize.WhereOptions<EmployeeAttributes>>{ last_name: lastName }
	});
};

export let queryByEmployeeId = (employeeId: number, queryTransaction?: Sequelize.Transaction): Bluebird<EmployeeInstance | null> => {
	return EmployeeEntity.findOne(<Sequelize.FindOptions<EmployeeAttributes>>{
		transaction: queryTransaction,
		where: <Sequelize.WhereOptions<EmployeeAttributes>>{ employeeId: employeeId }
	});
};

export let queryAll = (): Bluebird<EmployeeInstance[]> => {
	return EmployeeEntity.findAll(<Sequelize.FindOptions<EmployeeAttributes>>{
		order: [ [EmployeeFieldName.CreatedOn, "ASC"] ]
	});
};

export let create = (newEmployee: EmployeeAttributes, createEmployee?: Sequelize.Transaction): Bluebird<EmployeeInstance> => {
	return EmployeeEntity.create(
		newEmployee,
		<Sequelize.CreateOptions>{
			employee: createEmployee
		});
};

export let destroy = (employeeListEntry: EmployeeInstance, destroyEmployee?: Sequelize.Transaction): Bluebird<void> => {
	return employeeListEntry.destroy(
		<Sequelize.InstanceDestroyOptions>{
			employee: destroyEmployee
		});
};
