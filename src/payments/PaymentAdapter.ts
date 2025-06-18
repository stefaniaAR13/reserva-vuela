export class PaymentAdapter {
  processPayment(amount: number, method: string): object {
    return { status: 'success', method, amount };
  }
}
