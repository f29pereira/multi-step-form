import React, { PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import { makeStore } from "@/app/lib/store";
import { AppStore, RootState } from "@/app/lib/store";
import {
  FieldValues,
  DefaultValues,
  useForm,
  FormProvider,
  UseFormReturn,
} from "react-hook-form";

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions<T extends FieldValues> extends Omit<
  RenderOptions,
  "queries"
> {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
  withFormProvider?: boolean; // React Hook Form flag
  formDefaultValues?: DefaultValues<T>; // React Hook Form values
}

/**
 * Test Render function: creates a new Redux store and renders a Provider
 */
export function renderWithProviders<T extends FieldValues>(
  ui: React.ReactElement,
  extendedRenderOptions: ExtendedRenderOptions<T> = {},
) {
  const {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = makeStore(preloadedState),
    withFormProvider = false, // React Hook Form flag default value
    formDefaultValues, // React Hook Form
    ...renderOptions
  } = extendedRenderOptions;

  // React Hook Form wrapper
  const FormWrapper = ({ children }: PropsWithChildren) => {
    const methods: UseFormReturn<T> | undefined = useForm({
      defaultValues: formDefaultValues,
    });

    return <FormProvider {...methods}>{children}</FormProvider>;
  };

  const Wrapper = ({ children }: PropsWithChildren) => (
    <Provider store={store}>
      {withFormProvider ? <FormWrapper>{children}</FormWrapper> : children}
    </Provider>
  );

  // Return an object with the store and all of RTL's query functions
  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}
