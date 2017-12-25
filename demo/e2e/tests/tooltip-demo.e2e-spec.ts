import { browser } from 'protractor';
import { tooltipEl } from '../selectors.json';

async function awaitTooltipIsDisplayed(): Promise<boolean> {
  return await tooltipEl.tooltipElement.isDisplayed();
}

async function awaitGetTooltipAttribute(): Promise<string> {
  return await tooltipEl.buttonComponentLevelStyling.getAttribute('tooltip');
}

describe('Tooltip page test on bootstrap 3.', () => {
  beforeAll(() => {
    browser.get('#/tooltip');
  });

  it('Check the tooltip for Simple demo button.', () => {
    browser.actions()
      .mouseMove(tooltipEl.buttonSimpleDemo)
      .perform();
    expect(awaitTooltipIsDisplayed).toBeTruthy();
  });

  it('Four directions tooltip.', () => {
    browser.actions()
      .mouseMove(tooltipEl.buttonFourDirectionsLeft)
      .perform();
    expect(awaitTooltipIsDisplayed).toBeTruthy();

    browser.actions()
      .mouseMove(tooltipEl.buttonFourDirectionsTop)
      .perform();
    expect(awaitTooltipIsDisplayed).toBeTruthy();

    browser.actions()
      .mouseMove(tooltipEl.buttonFourDirectionsBottom)
      .perform();
    expect(awaitTooltipIsDisplayed).toBeTruthy();

    browser.actions()
      .mouseMove(tooltipEl.buttonFourDirectionsRight)
      .perform();
    expect(awaitTooltipIsDisplayed).toBeTruthy();
  });

  it('Dismissible tooltip.', () => {
    browser.actions()
      .click(tooltipEl.buttonDismissible)
      .perform();
    expect(awaitTooltipIsDisplayed).toBeTruthy();
  });

  it('Dynamic Content tooltip.', () => {
    browser.actions()
      .mouseMove(tooltipEl.buttonSimpleBinding)
      .perform();
    expect(awaitTooltipIsDisplayed).toBeTruthy();

    browser.actions()
      .mouseMove(tooltipEl.buttonTemplateRefBinding)
      .perform();
    expect(awaitTooltipIsDisplayed).toBeTruthy();
  });

  it('Dynamic Html tooltip.', () => {
    browser.actions()
      .mouseMove(tooltipEl.buttonDynamicHTML)
      .perform();
    expect(awaitTooltipIsDisplayed).toBeTruthy();
  });

  it('Append to body.', () => {
    browser.actions()
      .mouseMove(tooltipEl.buttonDefaultTooltip)
      .perform();
    expect(awaitTooltipIsDisplayed).toBeTruthy();

    browser.actions()
      .mouseMove(tooltipEl.buttonAppendedToBody)
      .perform();
    expect(awaitTooltipIsDisplayed).toBeTruthy();
  });

  it('Preconfigured tooltip.', () => {
    const textTemplate = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';

    browser.actions()
      .mouseMove(tooltipEl.buttonPreconfiguredTooltip)
      .perform();
    expect(awaitGetTooltipAttribute).toContain(textTemplate);
  });

  it('Custom triggers.', () => {
    browser.actions()
      .mouseMove(tooltipEl.buttonCustomTriggers)
      .perform(); // Moving over button to show tooltip.
    expect(awaitTooltipIsDisplayed).toBeTruthy();

    browser.actions()
      .mouseMove(tooltipEl.buttonPreconfiguredTooltip)
      .perform(); // Moving to to another button to test than tooltip still showed.
    expect(awaitTooltipIsDisplayed).toBeTruthy();

    browser.actions()
      .click(tooltipEl.buttonCustomTriggers)
      .perform(); // Clicking the button - tooltip must be hidden.
    expect(awaitTooltipIsDisplayed).toBeFalsy();
  });

  it('Manual triggering.', () => {
    expect(awaitTooltipIsDisplayed).toBeFalsy();

    browser.actions()
      .click(tooltipEl.buttonManualTriggeringShow)
      .perform();
    expect(awaitTooltipIsDisplayed).toBeTruthy();

    browser.actions()
      .click(tooltipEl.buttonManualTriggeringHide)
      .perform();
    expect(awaitTooltipIsDisplayed).toBeFalsy();

  });

  it('Component level styling.', () => {
    const textTemplate = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';

    browser.actions()
      .mouseMove(tooltipEl.buttonComponentLevelStyling)
      .perform();
    expect(awaitGetTooltipAttribute).toContain(textTemplate);
  });
});
