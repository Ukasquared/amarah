import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'


@Entity('user')
export class User {

 @PrimaryGeneratedColumn()
 id!: number;

 @Column('text', {array: true})
 category!: string[]

 @Column('text')
 item_description!: string
}