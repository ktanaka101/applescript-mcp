export interface ScriptDefinition {
  /**
   * The name of the script.
   */
  name: string;

  /**
   * A brief description of what the script does.
   */
  description: string;

  /**
   * The script content, which can be a string or a function that returns a string.
   */
  script: string | ((args: any) => string);

  /**
   * Optional schema defining the structure of the script's input parameters.
   */
  schema?: {
    type: "object";
    properties: Record<string, any>;

    /**
     * Optional list of required properties in the schema.
     */
    required?: string[];
  };
}

export interface ScriptCategory {
  /**
   * The name of the script category.
   */
  name: string;

  /**
   * A brief description of the script category.
   */
  description: string;

  /**
   * A list of scripts that belong to this category.
   */
  scripts: ScriptDefinition[];
}

export interface FrameworkOptions {
  /**
   * Optional name of the framework.
   */
  name?: string;

  /**
   * Optional version of the framework.
   */
  version?: string;

  /**
   * Optional flag to enable or disable debug mode.
   */
  debug?: boolean;
}