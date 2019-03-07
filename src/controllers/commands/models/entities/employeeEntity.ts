import Sequelize from "sequelize";
import { DatabaseConnection } from "../databaseConnection";
import { DatabaseTableName } from "../constants/databaseTableNames";
import { EmployeeFieldName } from "../constants/fieldNames/employeeFieldNames";

const modelName: string = "Employee";

export interface EmployeeAttributes {
    id: number;
    firstName: string;
    lastName: string;
    employeeId: string;
    active: boolean;
    role: string;
    manager: string;
	// password: string;
	createdOn: Date;
}

export interface EmployeeInstance extends Sequelize.Instance<EmployeeAttributes> {
    id: number;
    firstName: string;
    lastName: string;
    employeeId: string;
    active: boolean;
    role: string;
    manager: string;
	// password: string;
	createdOn: Date;
}

export let EmployeeEntity: Sequelize.Model<EmployeeInstance, EmployeeAttributes> =
	DatabaseConnection.define<EmployeeInstance, EmployeeAttributes>(
		modelName,
		<Sequelize.DefineModelAttributes<EmployeeAttributes>>{
			id: <Sequelize.DefineAttributeColumnOptions>{
				field: EmployeeFieldName.ID,
				type: Sequelize.INTEGER,
				autoIncrement: true,
				allowNull: true,
				primaryKey: true
			},
			firstName: <Sequelize.DefineAttributeColumnOptions>{
				field: EmployeeFieldName.FirstName,
				type: Sequelize.STRING,
				allowNull: true
			},
			lastName: <Sequelize.DefineAttributeColumnOptions>{
				field: EmployeeFieldName.LastName,
				type: Sequelize.STRING,
				allowNull: true,
				defaultValue: ""
            },
            employeeId: <Sequelize.DefineAttributeColumnOptions>{
                filed: EmployeeFieldName.EmployeeID,
                type:Sequelize.UUID,
                allowNull: true,
                defaultValue: ""
            },
            active: <Sequelize.DefineAttributeColumnOptions>{
                filed: EmployeeFieldName.Active,
                type:Sequelize.BOOLEAN,
                allowNull: true,
                defaultValue: false
            },
            role: <Sequelize.DefineAttributeColumnOptions>{
                filed: EmployeeFieldName.Role,
                type:Sequelize.STRING,
                allowNull: true
            },
            manager: <Sequelize.DefineAttributeColumnOptions>{
                filed: EmployeeFieldName.Manager,
                type:Sequelize.UUID,
                allowNull: true,
                defaultValue: ""
            },
/*            password: <Sequelize.DefineAttributeColumnOptions>{
                filed: EmployeeFieldName.Password,
                type:Sequelize.STRING,
                allowNull: true,
                defaultValue: ""
            },*/
			createdOn: <Sequelize.DefineAttributeColumnOptions>{
				field: EmployeeFieldName.CreatedOn,
				type: Sequelize.DATE,
				allowNull: true
			}
		},
		<Sequelize.DefineOptions<EmployeeInstance>>{
			timestamps: false,
			freezeTableName: true,
			tableName: DatabaseTableName.EMPLOYEE
		});
