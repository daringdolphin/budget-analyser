```md
# Implementation Plan

## Project Setup and Configuration
- [x] Step 1: Verify Project Structure
  - **Task**: Review the existing project structure based on the `starter_template` to ensure the AI understands the initial file organization. Confirm presence of essential files. No code changes in this step, just verification.
  - **Files**:
    - `README.md`: Verify presence.
    - `components.json`: Verify presence.
    - `next.config.mjs`: Verify presence.
    - `package.json`: Verify presence.
    - `postcss.config.mjs`: Verify presence.
    - `tailwind.config.js`: Verify presence.
    - `tailwind.config.ts`: Verify presence.
    - `tsconfig.json`: Verify presence.
    - `.eslintrc.json`: Verify presence.
    - `app/globals.css`: Verify presence.
    - `app/layout.tsx`: Verify presence.
    - `app/page.tsx`: Verify presence.
    - `app/api/get-recommendation/route.ts`: Verify presence.
    - `components/breadcrumb.tsx`: Verify presence.
    - `components/button.tsx`: Verify presence.
    - `components/card.tsx`: Verify presence.
    - `components/footer.tsx`: Verify presence.
    - `components/header.tsx`: Verify presence.
    - `components/input.tsx`: Verify presence.
    - `components/navigation.tsx`: Verify presence.
    - `components/separator.tsx`: Verify presence.
    - `components/sheet.tsx`: Verify presence.
    - `components/sidebar.tsx`: Verify presence.
    - `components/professions/profession-grid.tsx`: Verify presence.
    - `components/professions/profession-search.tsx`: Verify presence.
    - `components/recommendations/recommendation-card.tsx`: Verify presence.
    - `components/recommendations/recommendations-modal.tsx`: Verify presence.
    - `components/recommendations/recommendations-page.tsx`: Verify presence.
    - `components/ui/button.tsx`: Verify presence.
    - `components/ui/card.tsx`: Verify presence.
    - `components/ui/input.tsx`: Verify presence.
    - `components/ui/sheet.tsx`: Verify presence.
    - `lib/recommendations.ts`: Verify presence.
    - `lib/utils.ts`: Verify presence.
    - `lib/system-prompt.ts`: Verify presence.
  - **Step Dependencies**: None
  - **User Instructions**: None

- [x] Step 2: Set up Environment Variables
  - **Task**: Create a `.env.local` file and add the `GEMINI_API_KEY` environment variable.
  - **Files**:
    - `.env.local`: Create this file.
  - **Step Dependencies**: Step 1
  - **User Instructions**:
    1.  Create `.env.local` in the project root.
    2.  Obtain a Gemini API key.
    3.  Add `GEMINI_API_KEY=<YOUR_API_KEY>` to `.env.local`.
    4.  Ensure `.env.local` is in `.gitignore`.

## Backend - API Route and Gemini Integration
- [x] Step 3: Implement Gemini API Client Initialization
  - **Task**: Implement `initializeGeminiClient` function in `app/api/get-recommendation/route.ts` to initialize the Gemini client using `GEMINI_API_KEY` from environment variables.
  - **Files**:
    - `app/api/get-recommendation/route.ts`: Modify `initializeGeminiClient` function.
  - **Step Dependencies**: Step 2
  - **User Instructions**: Ensure Gemini API key is in `.env.local`.

- [x] Step 4: Implement Gemini Chat Session and Message Handling
  - **Task**: Implement `createChatSession` in `app/api/get-recommendation/route.ts` to handle chat session with Gemini, using a basic placeholder `systemPrompt()`.
  - **Files**:
    - `app/api/get-recommendation/route.ts`: Modify `createChatSession` function.
  - **Step Dependencies**: Step 3
  - **User Instructions**: None

- [x] Step 5: Implement Basic System Prompt
  - **Task**: Create a basic placeholder `systemPrompt` function in `lib/system-prompt.ts` returning a simple prompt string.
  - **Files**:
    - `lib/system-prompt.ts`: Create and define `systemPrompt` function.
  - **Step Dependencies**: Step 4
  - **User Instructions**: None

- [x] Step 6: Implement POST Route Handler
  - **Task**: Implement `POST` function in `app/api/get-recommendation/route.ts` to handle incoming requests, validate input, call `createChatSession`, and return Gemini response.
  - **Files**:
    - `app/api/get-recommendation/route.ts`: Modify `POST` function.
  - **Step Dependencies**: Step 4, Step 5
  - **User Instructions**: None

## Frontend - Core Components and Layout
- [x] Step 7: Verify and Adjust Root Layout
  - **Task**: Review and adjust `app/layout.tsx` and `app/globals.css` for font setup and basic layout structure if needed.
  - **Files**:
    - `app/layout.tsx`: Review and adjust if needed.
    - `app/globals.css`: Review and adjust if needed.
  - **Step Dependencies**: Step 1
  - **User Instructions**: None

- [x] Step 8: Implement Navigation Component Structure
  - **Task**: Implement `Navigation` component in `components/navigation.tsx` with sticky header, navigation links, mobile menu using `Sheet`, and "Back to Top" button.
  - **Files**:
    - `components/navigation.tsx`: Implement component structure and functionality.
  - **Step Dependencies**: Step 7
  - **User Instructions**: None

- [x] Step 9: Implement Header Component
  - **Task**: Implement `Header` component in `components/header.tsx` with Singapore flag icon, main title, and subtitle.
  - **Files**:
    - `components/header.tsx`: Implement component structure and content.
  - **Step Dependencies**: Step 7
  - **User Instructions**: None

- [x] Step 10: Implement Footer Component
  - **Task**: Implement `Footer` component in `components/footer.tsx` with application info, quick links, contact, and copyright.
  - **Files**:
    - `components/footer.tsx`: Implement component structure and content.
  - **Step Dependencies**: Step 7
  - **User Instructions**: None

- [x] Step 11: Set up Home Page Structure
  - **Task**: Modify `app/page.tsx` to include `Navigation`, `Header`, `ProfessionSearch`, `ProfessionGrid`, and `Footer` components for basic home page layout.
  - **Files**:
    - `app/page.tsx`: Modify page structure and include components.
  - **Step Dependencies**: Step 8, Step 9, Step 10
  - **User Instructions**: None

## Frontend - Profession Input Components
- [x] Step 12: Implement Profession Search Component UI
  - **Task**: Implement UI for `ProfessionSearch` in `components/professions/profession-search.tsx` with input, animated placeholder, submit button, and form handling.
  - **Files**:
    - `components/professions/profession-search.tsx`: Implement UI and animated placeholder.
  - **Step Dependencies**: Step 11
  - **User Instructions**: None

- [x] Step 13: Implement Profession Grid Component UI
  - **Task**: Implement UI for `ProfessionGrid` in `components/professions/profession-grid.tsx` using `Card` components to display profession options.
  - **Files**:
    - `components/professions/profession-grid.tsx`: Implement UI for profession grid.
  - **Step Dependencies**: Step 11, Step 12
  - **User Instructions**: None

## Frontend - Connect Profession Input and Fetch Recommendations
- [x] Step 14: Connect Profession Search to API
  - **Task**: Modify `ProfessionSearch` in `components/professions/profession-search.tsx` to call `/api/get-recommendation` on form submit and pass profession as input.
  - **Files**:
    - `components/professions/profession-search.tsx`: Implement API call on submit.
  - **Step Dependencies**: Step 6, Step 12
  - **User Instructions**: Ensure backend API is running.

- [x] Step 15: Connect Profession Grid to API
  - **Task**: Modify `ProfessionGrid` in `components/professions/profession-grid.tsx` to call `/api/get-recommendation` on card click and pass selected profession.
  - **Files**:
    - `components/professions/profession-grid.tsx`: Implement API call on card click.
  - **Step Dependencies**: Step 6, Step 13, Step 14
  - **User Instructions**: Ensure backend API is running.

- [x] Step 16: Implement Recommendation Data Type
  - **Task**: Define `Recommendation` interface in `lib/recommendations.ts` matching the expected JSON response from Gemini API.
  - **Files**:
    - `lib/recommendations.ts`: Define `Recommendation` interface.
  - **Step Dependencies**: Step 15
  - **User Instructions**: None

- [x] Step 17: Fetch and Store Recommendations in Home Page
  - **Task**: Modify `app/page.tsx` to manage state for recommendations, profession, loading, error, and fetch recommendations from API in `handleProfessionSelect`.
  - **Files**:
    - `app/page.tsx`: Modify to fetch and store recommendations and handle loading/error states.
    - `lib/recommendations.ts`: Ensure `Recommendation` interface is defined.
  - **Step Dependencies**: Step 15, Step 16
  - **User Instructions**: None

## Frontend - Recommendation Display Components
- [x] Step 18: Implement Compact Recommendation Card
  - **Task**: Implement compact `RecommendationCard` component in `components/recommendations/recommendation-card.tsx` for modal preview.
  - **Files**:
    - `components/recommendations/recommendation-card.tsx`: Implement compact card UI and `RecommendationActions` sub-component.
  - **Step Dependencies**: Step 17
  - **User Instructions**: None

- [x] Step 19: Implement Detailed Recommendation Card
  - **Task**: Extend `RecommendationCard` in `components/recommendations/recommendation-card.tsx` for detailed view, including "Why This Matters" section.
  - **Files**:
    - `components/recommendations/recommendation-card.tsx`: Implement detailed card view and adjust `RecommendationActions` if needed.
  - **Step Dependencies**: Step 18
  - **User Instructions**: None

- [x] Step 20: Implement Recommendations Modal
  - **Task**: Implement `RecommendationsModal` in `components/recommendations/recommendations-modal.tsx` using `Sheet` to display top 3 recommendations and "View All" button.
  - **Files**:
    - `components/recommendations/recommendations-modal.tsx`: Implement modal structure and display of preview recommendations.
  - **Step Dependencies**: Step 19
  - **User Instructions**: None

- [x] Step 21: Implement Recommendations Page
  - **Task**: Implement `RecommendationsPage` in `components/recommendations/recommendations-page.tsx` to display all recommendations in detail with "Back" button.
  - **Files**:
    - `components/recommendations/recommendations-page.tsx`: Implement full recommendations page.
  - **Step Dependencies**: Step 19, Step 20
  - **User Instructions**: None

- [x] Step 22: Integrate Recommendations Modal in Home Page
  - **Task**: Integrate `RecommendationsModal` into `app/page.tsx` and control its visibility based on `showRecommendations` state.
  - **Files**:
    - `app/page.tsx`: Integrate `RecommendationsModal` and control its visibility.
  - **Step Dependencies**: Step 20, Step 21
  - **User Instructions**: None

## Frontend - Navigation and UI Polish
- [x] Step 23: Implement "View All" and "Back" Navigation
  - **Task**: Implement navigation between `RecommendationsModal` and `RecommendationsPage` using state in `app/page.tsx` to control which component is rendered.
  - **Files**:
    - `components/recommendations/recommendations-modal.tsx`: Modify "View All" button logic.
    - `components/recommendations/recommendations-page.tsx`: Implement `onBack` prop logic.
    - `app/page.tsx`: Control rendering of Modal or Page based on `showFullPage` state.
  - **Step Dependencies**: Step 22
  - **User Instructions**: None

- [x] Step 24: Verify Sticky Navigation and "Back to Top" Button
  - **Task**: Verify and adjust `Navigation` component in `components/navigation.tsx` for sticky behavior and "Back to Top" button functionality.
  - **Files**:
    - `components/navigation.tsx`: Verify and adjust sticky navigation and "Back to Top" button.
    - `app/globals.css`: Adjust styles if needed for sticky navigation.
  - **Step Dependencies**: Step 23
  - **User Instructions**: Test scrolling behavior on different screen sizes.

- [x] Step 25: Implement Basic Responsive Design
  - **Task**: Review and adjust responsiveness of all components using Tailwind CSS responsive modifiers to ensure usability across devices.
  - **Files**:
    - `components/navigation.tsx`: Adjust responsive styles.
    - `components/header.tsx`: Adjust responsive styles.
    - `components/footer.tsx`: Adjust responsive styles.
    - `components/professions/profession-search.tsx`: Adjust responsive styles.
    - `components/professions/profession-grid.tsx`: Adjust responsive styles.
    - `components/recommendations/recommendation-card.tsx`: Adjust responsive styles.
    - `components/recommendations/recommendations-modal.tsx`: Adjust responsive styles.
    - `components/recommendations/recommendations-page.tsx`: Adjust responsive styles.
    - `app/page.tsx`: Adjust responsive container and layout if needed.
  - **Step Dependencies**: Step 24
  - **User Instructions**: Test responsiveness on different devices/browsers.

## Final Polish and Documentation
- [ ] Step 26: Refine System Prompt for Gemini API
  - **Task**: Refine `systemPrompt()` in `lib/system-prompt.ts` to generate more relevant, actionable, concise recommendations in JSON format for the FY25 Singapore Budget.
  - **Files**:
    - `lib/system-prompt.ts`: Refine `systemPrompt` function content.
  - **Step Dependencies**: Step 25
  - **User Instructions**: Test with professions and iterate on prompt for better recommendations.

- [ ] Step 27: Enhance Error Handling and Loading States
  - **Task**: Enhance error handling in `app/page.tsx` for API calls and improve loading states with user-friendly messages/indicators.
  - **Files**:
    - `app/page.tsx`: Enhance error handling and loading state UI.
  - **Step Dependencies**: Step 26
  - **User Instructions**: Test error and loading scenarios for smooth UX.

- [ ] Step 28: Code Cleanup and Comments
  - **Task**: Review codebase, remove unused code, add comments, and ensure consistent formatting using Prettier/ESLint.
  - **Files**: All relevant `.ts`, `.tsx`, and `.js` files in `app/`, `components/`, and `lib/`.
  - **Step Dependencies**: Step 27
  - **User Instructions**: Run `npm run lint` and `npm run format`, manually review and add comments.

- [ ] Step 29: Document Future Improvements
  - **Task**: Create `FUTURE_IMPROVEMENTS.md` (or update `README.md`) documenting potential future features from project request section 6.
  - **Files**:
    - `FUTURE_IMPROVEMENTS.md`: Create this file and document future features. (or `README.md`)
  - **Step Dependencies**: Step 28
  - **User Instructions**: Manually create `FUTURE_IMPROVEMENTS.md` and add future feature points.

# Optimization Plan
## Backend - Gemini API and Prompt Refinement
- [ ] Step 1: Refine System Prompt for Enhanced Recommendations
  - **Task**: Improve the `systemPrompt()` function in `lib/system-prompt.ts` to generate more targeted, actionable, and concise recommendations. Focus on ensuring the AI provides responses in the desired JSON format consistently and accurately reflects the FY25 Singapore Budget context. Test with various professions to ensure prompt effectiveness.
  - **Files**:
    - `lib/system-prompt.ts`: Refine the system prompt content.
  - **Step Dependencies**: None
  - **User Instructions**: Test the refined prompt with a range of professions and analyze the quality and format of the generated recommendations. Iterate on the prompt as needed to achieve optimal results.

- [ ] Step 2: Enhance API Error Handling and Logging
  - **Task**: Improve error handling within the `app/api/get-recommendation/route.ts` file. Implement more specific error responses to the frontend (e.g., distinguish between API key issues, Gemini API errors, and input validation failures). Add logging to the backend to track errors and debug issues more effectively.
  - **Files**:
    - `app/api/get-recommendation/route.ts`: Enhance error handling and add logging.
  - **Step Dependencies**: Step 1
  - **User Instructions**: Test API error scenarios by intentionally providing invalid input, removing the API key, or simulating Gemini API errors to verify improved error responses and logging.

## Frontend - Enhanced User Experience and Code Quality
- [ ] Step 3: Improve Loading and Error States in Home Page
  - **Task**: Enhance the visual feedback for loading and error states in `app/page.tsx`. Replace basic loading/error messages with more user-friendly indicators (e.g., loading spinners, informative error messages). Ensure these states are clearly visible and provide appropriate context to the user.
  - **Files**:
    - `app/page.tsx`: Improve loading and error state UI and messages.
  - **Step Dependencies**: Step 2
  - **User Instructions**: Test loading states by simulating slow API responses (e.g., using browser developer tools). Test error states by temporarily breaking the API endpoint or removing the API key to trigger error conditions and verify improved error feedback.

- [ ] Step 4: Enhance Recommendation Display with Richer UI
  - **Task**: Improve the visual presentation of `RecommendationCard` components in both compact (modal) and detailed (page) views. Consider adding visual cues or icons to highlight key aspects of recommendations, improve typography for better readability, and refine spacing for a cleaner layout. Ensure the "Why This Matters" section in the detailed card is visually distinct and informative.
  - **Files**:
    - `components/recommendations/recommendation-card.tsx`: Enhance UI of `RecommendationCard` component for both compact and detailed views.
  - **Step Dependencies**: Step 3
  - **User Instructions**: Review the visual appeal and readability of recommendation cards on different screen sizes. Ensure information is presented clearly and effectively.

- [ ] Step 5: Refine Responsive Design Across Components
  - **Task**: Thoroughly review and refine the responsive design of all components (`Navigation`, `Header`, `Footer`, `ProfessionSearch`, `ProfessionGrid`, `RecommendationCard`, `RecommendationsModal`, `RecommendationsPage`). Use Tailwind CSS responsive modifiers to ensure seamless adaptation and usability across various devices (desktop, tablet, mobile). Pay special attention to layout adjustments, font sizes, and component spacing at different breakpoints.
  - **Files**:
    - `components/navigation.tsx`: Adjust responsive styles.
    - `components/header.tsx`: Adjust responsive styles.
    - `components/footer.tsx`: Adjust responsive styles.
    - `components/professions/profession-search.tsx`: Adjust responsive styles.
    - `components/professions/profession-grid.tsx`: Adjust responsive styles.
    - `components/recommendations/recommendation-card.tsx`: Adjust responsive styles.
    - `components/recommendations/recommendations-modal.tsx`: Adjust responsive styles.
    - `components/recommendations/recommendations-page.tsx`: Adjust responsive styles.
    - `app/page.tsx`: Adjust responsive container and layout if needed.
    - `app/globals.css`: Adjust global styles if needed for responsiveness.
  - **Step Dependencies**: Step 4
  - **User Instructions**: Test the application on different devices and browsers, including various screen sizes and orientations. Use browser developer tools to inspect and adjust responsive behavior as needed.

- [ ] Step 6: Improve Code Comments and Documentation
  - **Task**: Review the codebase and add comprehensive comments to all significant functions, components, and complex logic sections. Focus on explaining the purpose, functionality, and any non-obvious aspects of the code. Ensure comments are clear, concise, and adhere to best practices for code documentation.
  - **Files**: All relevant `.ts`, `.tsx`, and `.js` files in `app/`, `components/`, and `lib/`.
  - **Step Dependencies**: Step 5
  - **User Instructions**: Manually review the codebase and add comments. Focus on clarity and completeness of documentation. Run linters and formatters to ensure code consistency after adding comments.

- [ ] Step 7: Codebase Cleanup and Consistency Check
  - **Task**: Conduct a thorough codebase cleanup. Remove any unused code, variables, or imports. Ensure consistent code formatting using Prettier and ESLint. Review naming conventions for variables, functions, and components to ensure they are descriptive and consistent throughout the project. Aim for a clean, maintainable, and easily understandable codebase.
  - **Files**: All relevant `.ts`, `.tsx`, and `.js` files in `app/`, `components/`, and `lib/`.
  - **Step Dependencies**: Step 6
  - **User Instructions**: Run `npm run lint` and `npm run format` to automatically fix formatting and linting issues. Manually review the codebase for any remaining cleanup tasks, unused code, and naming inconsistencies.

- [ ] Step 8: Document Future Improvements and Project Overview
  - **Task**: Update the `README.md` file to include a comprehensive project overview, detailing the application's purpose, features, target audience, and technology stack. Create a `FUTURE_IMPROVEMENTS.md` file and document potential future features and enhancements as outlined in section 6 of the project request. This documentation will serve as a valuable resource for future development and maintenance.
  - **Files**:
    - `README.md`: Update with project overview.
    - `FUTURE_IMPROVEMENTS.md`: Create this file and document future features.
  - **Step Dependencies**: Step 7
  - **User Instructions**: Manually write the project overview in `README.md` and list future improvements in `FUTURE_IMPROVEMENTS.md`. Ensure the documentation is clear, informative, and well-organized.
```