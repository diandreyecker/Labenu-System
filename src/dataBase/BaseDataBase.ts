import knex from "knex";
import dotenv from "dotenv"

dotenv.config()

export abstract class BaseDataBase {

    protected static connection = knex({
        client: "mysql",
        connection: {
            host: process.env.DB_HOST,
            port: 3306,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            multipleStatements: true
        },
    });

    abstract TABLE_NAME: string;

    //BUSCAR TUDO
    public async buscarTudo() {
        const result = await BaseDataBase.connection(this.TABLE_NAME).select("*")
        return result
    }

    //CRIAR
    public async criar(item: any) {
        await BaseDataBase.connection(this.TABLE_NAME).insert(item)
    }

    //BUSCAR POR ID
    public async buscarPorId(id: string) {
        const result = await BaseDataBase.connection(this.TABLE_NAME).select('*').where({ id })
        return result
    }
}