import { Component } from "react";

export default class ClothesFilter extends Component {

    render() {
        return (
            <>
                {/* Добавяме филтрири за мъжки и женски дрехи*/}
                <ul class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioHelperButton">
                    <li>
                        <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <div class="flex items-center h-5">
                                <input id="helper-radio-4" name="helper-radio" type="radio" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            </div>
                            <div class="ml-2 text-sm">
                                <label for="helper-radio-4" class="font-medium text-gray-900 dark:text-gray-300">
                                    <div>All</div>
                                    <p id="helper-radio-text-4" class="text-xs font-normal text-gray-500 dark:text-gray-300">See all available clothes.</p>
                                </label>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <div class="flex items-center h-5">
                                <input id="helper-radio-5" name="helper-radio" type="radio" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            </div>
                            <div class="ml-2 text-sm">
                                <label for="helper-radio-5" class="font-medium text-gray-900 dark:text-gray-300">
                                    <div>Men</div>
                                    <p id="helper-radio-text-5" class="text-xs font-normal text-gray-500 dark:text-gray-300">See all available men's clothing.</p>
                                </label>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <div class="flex items-center h-5">
                                <input id="helper-radio-6" name="helper-radio" type="radio" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            </div>
                            <div class="ml-2 text-sm">
                                <label for="helper-radio-6" class="font-medium text-gray-900 dark:text-gray-300">
                                    <div>Women</div>
                                    <p id="helper-radio-text-6" class="text-xs font-normal text-gray-500 dark:text-gray-300">See all available women's clothing.</p>
                                </label>
                            </div>
                        </div>
                    </li>
                </ul>
            </>
        );
    }
}