import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  Default
} from 'sequelize-typescript';

// 🟢 הגדרת טיפוסים מלאים
export interface UserAttributes {
  id: number;
  username: string;
  password: string;
  role: string;
  created_at?: Date;
}

export interface UserCreationAttributes
  extends Omit<UserAttributes, 'id' | 'created_at'> {}

// 🟢 שימוש בשם אחיד: User (לא Users)
@Table({ tableName: 'users', timestamps: false })
export class User extends Model<UserAttributes, UserCreationAttributes> {
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
