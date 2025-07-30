import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, Default } from 'sequelize-typescript';

@Table({ tableName: 'users', timestamps: false })
export class User {

  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  declare id: number;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    unique: true
  })
  declare username: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false
  })
  declare password: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false
  })
  declare role: string;

  @Default(DataType.NOW)
  @Column({
    type: DataType.DATE
  })
  declare created_at: Date;
}
