import { RequestHandler } from '../../util/requestHandler'
import { experimentRepository } from '../repositories'

/**
 * This function attempts to delete a given experiment model.
 * @param experimentModelId The id of the experiment model to be deleted.
 */
export async function deleteExperimentModelById(
    _requestHandler: RequestHandler,
    experimentModelId: string
) {
    return await experimentRepository.softDelete({ uuid: experimentModelId })
}
