import { DataSource } from "typeorm";

export const databaseProviders = [
  {
    provide: "DATA_SOURCE",
    useFactory: async () => {
      const dataSource = new DataSource({
        type: "mysql",
        host: "db",
        port: 3306,
        username: "root",
        password: "password",
        database: "mydatabase",
        entities: [__dirname + "/../**/*.entity{.ts,.js}"],
        synchronize: process.env.ENVIRONMENT === "dev" ? false : false,
      });

      return dataSource.initialize();
    },
  },
];
