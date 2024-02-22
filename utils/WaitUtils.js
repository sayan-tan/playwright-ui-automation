class WaitUtils{


    /**
     * Waits for a given amount of time.
     *
     * @param {number} timeInSeconds - The time to wait in seconds.
     *
     * @example
     * // Example usage:
     * await verificationUtils.waitForGivenTime(5);
     */
    async waitForGivenTime(timeInSeconds){
        console.log(`Waiting for '${timeInSeconds}' seconds.`)
        await new Promise(resolve => setTimeout(resolve, timeInSeconds * 1000));
    }

}

/**
 * Exports the Waits class as the default export of this module.
 * @module WaitUtils
 */
export default new WaitUtils;