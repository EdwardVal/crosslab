import { DataSource } from 'typeorm'
import { PeerconnectionStatus1670225182011 } from './migrations/1670225182011-PeerconnectionStatus'
import {
    DeviceModel,
    ExperimentModel,
    ParticipantModel,
    PeerconnectionModel,
    RoleModel,
    ServiceConfigurationModel,
} from './model'

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: 'db/experiment.db',
    synchronize: true,
    entities: [
        ExperimentModel,
        DeviceModel,
        ServiceConfigurationModel,
        PeerconnectionModel,
        ParticipantModel,
        RoleModel,
    ],
    migrations: [PeerconnectionStatus1670225182011],
    migrationsRun: true
})
