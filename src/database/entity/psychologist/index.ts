import { ObjectId } from 'mongodb'
import { Entity, Column, ObjectIdColumn, CreateDateColumn } from 'typeorm'

@Entity({ name: 'psychologist' })
class Psychologist {

    @ObjectIdColumn()
    _id: ObjectId

    @Column({
      length:  255
    })
    name: string

    @Column({
      length: 1200
    })
    description: string

    @CreateDateColumn()
    createdAt: Date

    @Column({
      length: 120
    })
    photo: string

    @Column({
      length: 16
    })
    phone: string

    @Column()
    consultationPrice: number

    @Column()
    sessionPrice: number

    @Column()
    ageGroup: string

}


export { Psychologist }
